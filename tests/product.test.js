import request from 'supertest';
import app from '../app';
import prisma from '../prisma';
import {
  userData,
  hostData,
  mainCategoryData,
  subCategoryData,
  upperRegionData,
  lowerRegionData,
  participantTypeData,
  productData,
  productDetailData,
  likeHostData,
  orderData,
  productOrderData,
  commentData,
  commentImageData,
  expectedCommentData,
  expectedProductDetailData,
} from './data/product';

const createTestData = async () => {
  await prisma.user.createMany({
    data: userData,
  });
  await prisma.host.create({
    data: hostData,
  });
  await prisma.mainCategory.create({
    data: mainCategoryData,
  });
  await prisma.subCategory.create({
    data: subCategoryData,
  });
  await prisma.upperRegion.create({
    data: upperRegionData,
  });
  await prisma.lowerRegion.create({
    data: lowerRegionData,
  });
  await prisma.participantType.create({
    data: participantTypeData,
  });
  await prisma.product.create({
    data: productData,
  });
  await prisma.productDetail.create({
    data: productDetailData,
  });
  await prisma.likeHost.create({
    data: likeHostData,
  });
  await prisma.order.createMany({
    data: orderData,
  });
  await prisma.productOrder.create({
    data: productOrderData,
  });
  await prisma.comment.createMany({
    data: commentData,
  });
  await prisma.commentImage.create({
    data: commentImageData,
  });
};

beforeAll(async () => {
  await prisma.commentImage.deleteMany();
  await prisma.comment.deleteMany();
  await prisma.productOrder.deleteMany();
  await prisma.order.deleteMany();
  await prisma.likeHost.deleteMany();
  await prisma.productDetail.deleteMany();
  await prisma.product.deleteMany();
  await prisma.participantType.deleteMany();
  await prisma.lowerRegion.deleteMany();
  await prisma.upperRegion.deleteMany();
  await prisma.subCategory.deleteMany();
  await prisma.mainCategory.deleteMany();
  await prisma.host.deleteMany();
  await prisma.user.deleteMany();
  await createTestData();
});

afterAll(async () => {
  await prisma.commentImage.deleteMany();
  await prisma.comment.deleteMany();
  await prisma.productOrder.deleteMany();
  await prisma.order.deleteMany();
  await prisma.likeHost.deleteMany();
  await prisma.productDetail.deleteMany();
  await prisma.product.deleteMany();
  await prisma.participantType.deleteMany();
  await prisma.lowerRegion.deleteMany();
  await prisma.upperRegion.deleteMany();
  await prisma.subCategory.deleteMany();
  await prisma.mainCategory.deleteMany();
  await prisma.host.deleteMany();
  await prisma.user.deleteMany();
});

describe('/products/:id/comments : case 1', () => {
  test('get comments by product ID ', async () => {
    await request(app) //
      .get('/products/1/comments?orderBy=ratingHigh&offset=0')
      .expect(200, expectedCommentData);
  });
});

describe('/products/:id/comments : case 0', () => {
  test('get comments by product ID ', async () => {
    await request(app) //
      .get('/products/1/comments?orderBy=like')
      .expect(400, {
        message: '쿼리 스트링과 오프셋을 입력하세요.',
      });
  });
});

describe('/products/:id/comments : case -1', () => {
  test('get comments by product ID ', async () => {
    await request(app) //
      .get('/products/1/comments?orderBy=ratingBest&offset=0')
      .expect(400, {
        message:
          'orderBy의 값은 ratingHigh, ratingLow, latest, like 중 하나입니다.',
      });
  });
});

describe('/products/:id/ : case 1', () => {
  test('get product detail by product ID ', async () => {
    await request(app) //
      .get('/products/1')
      .expect(200, expectedProductDetailData);
  });
});

describe('/products/:id/ : case 0', () => {
  test('get product detail by product ID ', async () => {
    await request(app) //
      .get('/products/sdf')
      .expect(400, { message: '상품의 id를 입력해주세요.' });
  });
});

describe('/products/:id/ : case -1', () => {
  test('get product detail by product ID ', async () => {
    await request(app) //
      .get('/products/2')
      .expect(400, { message: '해당하는 상품은 없습니다.' });
  });
});
