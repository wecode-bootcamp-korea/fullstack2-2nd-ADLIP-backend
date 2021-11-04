import prisma from '../prisma';
import _ from 'lodash';

const getProductById = async id => {
  const result = await prisma.product.findMany({
    where: {
      id: parseInt(id),
    },
    select: {
      id: true,
      name: true,
      price: true,
      summary: true,
      mainImageUrl: true,
      discountRate: true,
      _count: {
        select: {
          LikeProduct: true,
        },
      },
      ProductDetail: {
        select: {
          palceOfProgress: true,
          gatheringPlace: true,
          expiredDay: true,
        },
      },
      host: {
        select: {
          id: true,
          _count: {
            select: { Product: true, LikeHost: true },
          },
          user: {
            select: {
              nickname: true,
              profileImageUrl: true,
            },
          },
        },
      },
    },
  });

  const commentData = await getCommentsByIdOrderedByRatingHigh(id, 10);
  result[0].comment = commentData;
  const hostId = result[0].host.id;
  const totalLikeOfHostAccepted = await getTotalLikeOfHostAccepted(hostId);
  result[0].host._count.LikeProduct = totalLikeOfHostAccepted;
  const [product] = result;
  product.palceOfProgress = product.ProductDetail.palceOfProgress;
  product.gatheringPlace = product.ProductDetail.gatheringPlace;
  product.expiredDay = product.ProductDetail.expiredDay;
  delete product.ProductDetail;
  product.host.nickname = product.host.user.nickname;
  product.host.profileImageUrl = product.host.user.profileImageUrl;
  delete product.host.user;
  product.host.numberOfProduct = product.host._count.Product;
  product.host.numberOfGetLiked = product.host._count.LikeHost;
  product.host.nuberOfProductLiked = product.host._count.LikeProduct;
  delete product.host._count;
  product.liked = product._count.LikeProduct;
  delete product._count;
  product.comment = product.comment.Comment;

  return product;
};

const refineCommentData = async (id, commentData, data) => {
  commentData.map(el => {
    el.nickname = el.order.user.nickname;
    el.profileImageUrl = el.order.user.profileImageUrl;
    el.totalLiked = el._count.LikeComment;
    const date = new Date(el.createdAt);
    el.createdAt = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    delete el.order;
    delete el._count;
  });
  data.totalConutOfComment = data._count.Comment;
  data.ratingAvg = await getRatingAverageByProductId(id);
  delete data._count;
};

const getTotalLikeOfHostAccepted = async id => {
  const host = await prisma.host.findMany({
    select: {
      Product: {
        select: {
          _count: {
            select: {
              LikeProduct: true,
            },
          },
        },
      },
    },
  });
};

const getCommentsByIdOrderedByRatingHigh = async (id, offset) => {
  const comment = await prisma.product.findMany({
    select: {
      _count: {
        select: {
          Comment: true,
        },
      },
      Comment: {
        take: 10,
        skip: parseInt(offset),
        select: {
          id: true,
          productId: true,
          rating: true,
          commentText: true,
          createdAt: true,
          reply: true,
          CommentImage: true,
          order: {
            select: {
              user: {
                select: {
                  nickname: true,
                  profileImageUrl: true,
                },
              },
            },
          },
          _count: {
            select: {
              LikeComment: true,
            },
          },
        },
        orderBy: { rating: 'desc' },
      },
    },
    where: {
      id: parseInt(id),
    },
  });
  const [result] = comment;
  await refineCommentData(id, result.Comment, result);
  return result;
};

const getCommentsByIdOrderedByRatingLow = async (id, offset) => {
  const comment = await prisma.product.findMany({
    select: {
      _count: {
        select: {
          Comment: true,
        },
      },
      Comment: {
        take: 10,
        skip: parseInt(offset),
        select: {
          id: true,
          productId: true,
          rating: true,
          commentText: true,
          createdAt: true,
          reply: true,
          CommentImage: true,
          order: {
            select: {
              user: {
                select: {
                  nickname: true,
                  profileImageUrl: true,
                },
              },
            },
          },
          _count: {
            select: {
              LikeComment: true,
            },
          },
        },
        orderBy: { rating: 'asc' },
      },
    },
    where: {
      id: parseInt(id),
    },
  });
  const result = host[0].Product.map(like => {
    const likeCnt = like._count.LikeProduct;
    return likeCnt;
  });

  return _.sum(result);
};

const getCommentsByIdOrderedByLatest = async (id, offset) => {
  const comment = await prisma.product.findMany({
    select: {
      _count: {
        select: {
          Comment: true,
        },
      },
      Comment: {
        take: 10,
        skip: parseInt(offset),
        select: {
          id: true,
          productId: true,
          rating: true,
          commentText: true,
          createdAt: true,
          reply: true,
          CommentImage: true,
          order: {
            select: {
              user: {
                select: {
                  nickname: true,
                  profileImageUrl: true,
                },
              },
            },
          },
          _count: {
            select: {
              LikeComment: true,
            },
          },
        },
        orderBy: { createdAt: 'desc' },
      },
    },
    where: {
      id: parseInt(id),
    },
  });
  const [result] = comment;
  await refineCommentData(id, result.Comment, result);
  return result;
};

const getCommentsByIdOrderedByLike = async (id, offset) => {
  const comment = await prisma.product.findMany({
    select: {
      _count: {
        select: {
          Comment: true,
        },
      },
      Comment: {
        take: 10,
        skip: parseInt(offset),
        select: {
          id: true,
          productId: true,
          rating: true,
          commentText: true,
          createdAt: true,
          reply: true,
          CommentImage: true,
          order: {
            select: {
              user: {
                select: {
                  nickname: true,
                  profileImageUrl: true,
                },
              },
            },
          },
          _count: {
            select: {
              LikeComment: true,
            },
          },
        },
        orderBy: {
          LikeComment: {
            _count: 'desc',
          },
        },
      },
    },
    where: {
      id: parseInt(id),
    },
  });
  const [result] = comment;
  await refineCommentData(id, result.Comment, result);
  return result;
};

const getRatingAverageByProductId = async productId => {
  const result = await prisma.comment.aggregate({
    _avg: {
      rating: true,
    },
    where: {
      productId: parseInt(productId),
    },
  });
  const ratingAvg = result._avg.rating;
  return ratingAvg;
};

const getTotalCountOfProducts = async () => {
  const totalCount = await prisma.product.findMany();
  return totalCount.length;
};

export default {
  getProductById,
  getTotalCountOfProducts,
  getCommentsByIdOrderedByRatingHigh,
  getCommentsByIdOrderedByRatingLow,
  getCommentsByIdOrderedByLatest,
  getCommentsByIdOrderedByLike,
};
