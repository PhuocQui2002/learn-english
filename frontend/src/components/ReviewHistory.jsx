import React from "react";
import { mockReviews } from "../api/mockData";
import { useParams } from "react-router-dom";
function ReviewHistory() {
  const { id } = useParams();
  const filteredReviews = mockReviews.filter(
    (review) => review.courseId === id,
  );

  return (
    <div className="h-8">
      <section className="bg-white py-8 antialiased dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Đánh giá khóa học
            </h2>
          </div>

          <div className="mt-8 space-y-8">
            {/* Review item start */}
            {filteredReviews.length > 0 ? (
              filteredReviews.map((review) => (
                <article className="rounded-lg border border-gray-200 bg-white p-6 shadow dark:border-gray-700 dark:bg-gray-800">
                  <div className="mb-4 flex items-center">
                    <img
                      className="mr-4 h-10 w-10 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                      alt="Reviewer"
                    />
                    <div className="font-medium dark:text-white">
                      <p>
                        {review.userName}
                        <span className="ml-1 text-sm text-gray-500 dark:text-gray-400">
                          đã đánh giá vào ngày {review.createdAt}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="mb-1 flex items-center space-x-1">
                    {Array(5)
                      .fill()
                      .map((_, i) => (
                        <svg
                          key={i}
                          className={`h-5 w-5 ${
                            i < review.rating
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.12 3.446h3.623c.969 0 1.371 1.24.588 1.81l-2.932 2.128 1.12 3.447c.3.921-.755 1.688-1.54 1.118L10 13.347l-2.93 2.129c-.785.57-1.84-.197-1.54-1.118l1.12-3.447-2.933-2.128c-.782-.57-.38-1.81.588-1.81h3.624l1.12-3.446z" />
                        </svg>
                      ))}
                  </div>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    {review.comment}
                  </p>
                  <footer className="text-sm text-gray-500 dark:text-gray-400">
                    Đánh giá này được gửi bởi tài khoản đã xác minh.
                  </footer>
                </article>
              ))
            ) : (
              <p className="text-center text-gray-500 dark:text-gray-400">
                Hiện chưa có đánh giá nào cho khóa học này.
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ReviewHistory;
