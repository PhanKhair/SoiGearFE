import { ReviewType } from "@/schemas/reviewSchema";

export const sampleReviewProductData: ReviewType[] = [
  {
    reviewId: "r1",
    productId: "p234",
    userId: "u345",
    user: {
      name: "Khải Tỏi",
      avatar:
        "https://inkythuatso.com/uploads/thumbnails/800/2023/02/hinh-anh-cun-con-de-thuong-mat-ngo-ngac-1-24-11-47-36.jpg",
    },
    comment: "Thiết kế tinh tế, chất lượng vượt mong đợi. Mình rất hài lòng!",
    rating: 5,
    createdAt: "2025-06-03T09:30:00.000Z",
    updatedAt: "2025-06-03T09:30:00.000Z",
  },
  {
    reviewId: "r2",
    productId: "p234",
    userId: "u346",
    user: {
      name: "Toan Dev Trai",
      avatar:
        "https://cellphones.com.vn/sforum/wp-content/uploads/2024/02/avatar-anh-meo-cute-3.jpg",
    },
    comment:
      "Màu sắc ổn, giao hàng nhanh nhưng đóng gói chưa thực sự chắc chắn.",
    rating: 4,
    createdAt: "2025-06-02T15:12:00.000Z",
    updatedAt: "2025-06-02T15:12:00.000Z",
  },
  {
    reviewId: "r3",
    productId: "p234",
    userId: "u347",
    user: {
      name: "Duy Cá",
      avatar:
        "https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/475223Amy/anh-mo-ta.png",
    },
    comment: "Tạm ổn trong tầm giá. Có thể cải thiện thêm về độ bền.",
    rating: 3,
    createdAt: "2025-06-01T07:48:00.000Z",
    updatedAt: "2025-06-01T07:48:00.000Z",
  },
];
