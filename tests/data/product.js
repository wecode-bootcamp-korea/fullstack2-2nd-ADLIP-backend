export const userData = [
  {
    id: 1,
    email: 'test001@gmail.com',
    password: 'Qwer1234!@#$',
    nickname: 'test001',
    status: 'host',
    socialPlatform: 'local',
  },
  {
    id: 2,
    email: 'test002@gmail.com',
    password: 'Qwer1234!@#$',
    nickname: 'test002',
    status: 'user',
    socialPlatform: 'local',
  },
];

export const hostData = { id: 1, userId: 1, account: 'account' };

export const mainCategoryData = {
  id: 1,
  mainCategoryName: 'mainCategory',
  mainCategoryImageUrl: 'url',
};

export const subCategoryData = {
  id: 1,
  subCategoryName: 'subCategory',
  mainCategoryId: 1,
};

export const upperRegionData = {
  id: 1,
  name: 'upperRegion',
};

export const lowerRegionData = {
  id: 1,
  name: 'lower region',
  upperRegionId: 1,
};

export const participantTypeData = {
  id: 1,
  name: 'solo',
};

export const productData = {
  id: 1,
  name: 'product1',
  price: 10000,
  summary: 'summary',
  mainImageUrl: 'url',
  isOnly: false,
  isNew: false,
  startAt: new Date(2021 - 11 - 10),
  finishAt: new Date(2021 - 11 - 10),
  location: 'location',
  mainCategoryId: 1,
  subCategoryId: 1,
  hostId: 1,
  upperRegionId: 1,
  lowerRegionId: 1,
  participantTypeId: 1,
};

export const productDetailData = {
  id: 1,
  palceOfProgress: 'placeOfProgress',
  placeOfProgressLatitude: 10,
  placeOfProgressLongitude: 10,
  gatheringPlace: 'gatheringPlace',
  gatheringPlaceLatitude: 10,
  gatheringPlcaeLongitude: 10,
  expiredDay: 10,
  introduction: 'introduction',
  productId: 1,
};

export const likeHostData = {
  id: 1,
  userId: 2,
  hostId: 1,
};

export const orderData = [
  {
    id: 1,
    userId: 2,
  },
  {
    id: 2,
    userId: 2,
  },
];

export const productOrderData = {
  id: 1,
  orderId: 1,
  productId: 1,
};

export const commentData = [
  {
    id: 1,
    rating: 5,
    commentText: 'comment1',
    orderId: 1,
    productId: 1,
    createdAt: new Date('2021-11-10 17:00'),
  },
  {
    id: 2,
    rating: 4,
    commentText: 'comment2',
    orderId: 2,
    productId: 1,
    createdAt: new Date('2021-11-10 17:00'),
  },
];

export const commentImageData = {
  id: 1,
  commentImageUrl: 'commentImageUrl',
  commentId: 1,
};

export const expectedCommentData = {
  Comment: [
    {
      id: 1,
      productId: 1,
      rating: 5,
      commentText: 'comment1',
      createdAt: '2021-11-10 17:0',
      reply: null,
      CommentImage: [
        { id: 1, commentImageUrl: 'commentImageUrl', commentId: 1 },
      ],
      nickname: 'test002',
      profileImageUrl: null,
      totalLiked: 0,
    },
    {
      id: 2,
      productId: 1,
      rating: 4,
      commentText: 'comment2',
      createdAt: '2021-11-10 17:0',
      reply: null,
      CommentImage: [],
      nickname: 'test002',
      profileImageUrl: null,
      totalLiked: 0,
    },
  ],
  totalCountOfComment: 2,
  ratingAvg: 4.5,
};

export const expectedProductDetailData = {
  id: 1,
  name: 'product1',
  price: '10000',
  summary: 'summary',
  mainImageUrl: 'url',
  discountRate: null,
  host: {
    id: 1,
    nickname: 'test001',
    profileImageUrl: null,
    numberOfProduct: 1,
    numberOfGetLiked: 1,
    nuberOfProductLiked: 0,
  },
  comment: [],
  palceOfProgress: 'placeOfProgress',
  gatheringPlace: 'gatheringPlace',
  expiredDay: 10,
  introduction: 'introduction',
  liked: 0,
};
