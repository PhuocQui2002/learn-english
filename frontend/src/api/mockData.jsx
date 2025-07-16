import toeicImg from "../assets/images/Toeic.png";
import toeic550 from "../assets/images/Toeic550.1.png";
import Ielts6 from "../assets/images/Ielts6+.png";
import giaotiep from "../assets/images/giaotiep.png";
import b1 from "../assets/images/b1.png";
import nentang from "../assets/images/nentang.png";

export const mockCourses = [
  {
    _id: "1",
    title: "Khóa học giao tiếp ",
    price: 149000,
    image: giaotiep,
    treatment: "Ôn luyện đề, mẹo làm bài nhanh",
    description:
      "Khóa học dành cho người mới bắt đầu, giúp xây nền tảng giao tiếp tiếng Anh qua các tình huống quen thuộc như chào hỏi, mua sắm, hỏi đường... Lộ trình học từ cơ bản đến nâng cao, kết hợp luyện phản xạ, từ vựng và hội thoại ngắn.",
    category: "Giao tiếp",
    targetAudience: "Người mới bắt đầu",
    teacher: {
      name: "Nguyễn Thị Mai",
      school: "Giảng viên – ĐH Ngoại ngữ – ĐHQG Hà Nội",
      avatar:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
    },
  },
  {
    _id: "2",
    title: "TOEIC 700+ ",
    price: 300000,
    image: b1,
    treatment: "Ôn luyện đề, mẹo làm bài nhanh",
    description:
      "Khóa học dành cho người đã có nền tảng, cần đạt TOEIC 700+ trong thời gian ngắn. Tập trung luyện đề chuyên sâu, chiến lược làm bài nhanh và mẹo xử lý các dạng câu hỏi Listening & Reading. Nội dung bám sát đề thi thật, giúp tăng tốc độ và độ chính xác.",
    category: "TOEIC",
    targetAudience: "Sinh viên",
    teacher: {
      name: "Trần Quốc Bảo",
      avatar:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
      bio: "VSTEP C1, luyện thi cấp tốc.",
      school: "Cựu sinh viên – ĐH Sư phạm TP.HCM",
    },
  },
  {
    _id: "3",
    title: "Khóa học VS-Tep B1",
    price: 400000,
    image: b1,
    treatment: "Ôn luyện đề, mẹo làm bài nhanh",
    description:
      "Khóa học dành cho người mới bắt đầu ôn luyện VSTEP B1. Cung cấp nền tảng ngữ pháp, từ vựng và kỹ năng cần thiết cho 4 kỹ năng: Nghe, Nói, Đọc, Viết theo định dạng đề thi chuẩn.",
    category: "B1",
    targetAudience: "Sinh viên",
  },
  {
    _id: "4",
    title: "Khóa học nền tảng",
    price: 450000,
    image: nentang,
    treatment: "Ôn luyện đề, mẹo làm bài nhanh",
    description:
      "Khóa học nền tảng được thiết kế dành riêng cho những người mới bắt đầu hoặc đã mất gốc tiếng Anh. Nội dung tập trung xây dựng lại kiến thức cơ bản từ đầu như phát âm, từ vựng, ngữ pháp và kỹ năng nghe – nói – đọc – viết ở mức đơn giản nhất. Học viên sẽ từng bước làm quen với cấu trúc đề TOEIC, được hướng dẫn cách làm bài hiệu quả và luyện đề thực tế để tăng tốc độ làm bà",
    category: "Nền tảng",
    targetAudience: "Sinh viên",
  },
  {
    _id: "6",
    title: "TOEIC 550+ Cấp Tốc",
    price: 500000,
    image: toeic550,
    treatment: "Ôn luyện đề, mẹo làm bài nhanh",
    description:
      "Khóa học dành cho người mới bắt đầu ôn luyện TOEIC trong thời gian ngắn. Tập trung xây nền từ vựng, ngữ pháp, và kỹ năng làm bài cho phần Listening & Reading.Lộ trình: Làm quen định dạng đề TOEIC → Ôn ngữ pháp & từ vựng trọng tâm → Kỹ năng nghe – đọc cơ bản → Luyện đề theo từng phần thi → Đề tổng hợp cuối khóa.",
    category: "TOEIC",
    targetAudience: "Sinh viên",
    teacher: {
      name: "Hoàng Lan Anh",
      avatar:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png",
      bio: "IELTS 8.0, luyện giao tiếp & VSTEP B2.",
      school: "Tốt nghiệp Thạc sĩ Ngôn ngữ – ĐH Melbourne (Úc)",
    },
  },
  {
    _id: "7",
    title: "TOEIC 550+ Cấp Tốc",
    price: 500000,
    image: toeic550,
    treatment: "Ôn luyện đề, mẹo làm bài nhanh",
    description:
      "Khóa học dành cho người mới bắt đầu ôn luyện TOEIC trong thời gian ngắn. Tập trung xây nền từ vựng, ngữ pháp, và kỹ năng làm bài cho phần Listening & Reading.Lộ trình: Làm quen định dạng đề TOEIC → Ôn ngữ pháp & từ vựng trọng tâm → Kỹ năng nghe – đọc cơ bản → Luyện đề theo từng phần thi → Đề tổng hợp cuối khóa.",
    category: "TOEIC",
    targetAudience: "Sinh viên",
    teacher: {
      name: "Hoàng Lan Anh",
      avatar:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png",
      bio: "IELTS 8.0, luyện giao tiếp & VSTEP B2.",
      school: "Tốt nghiệp Thạc sĩ Ngôn ngữ – ĐH Melbourne (Úc)",
    },
  },
  {
    _id: "8",
    title: "TOEIC 550+ Cấp Tốc",
    price: 500000,
    image: toeic550,
    treatment: "Ôn luyện đề, mẹo làm bài nhanh",
    description:
      "Khóa học dành cho người mới bắt đầu ôn luyện TOEIC trong thời gian ngắn. Tập trung xây nền từ vựng, ngữ pháp, và kỹ năng làm bài cho phần Listening & Reading.Lộ trình: Làm quen định dạng đề TOEIC → Ôn ngữ pháp & từ vựng trọng tâm → Kỹ năng nghe – đọc cơ bản → Luyện đề theo từng phần thi → Đề tổng hợp cuối khóa.",
    category: "TOEIC",
    targetAudience: "Sinh viên",
    teacher: {
      name: "Hoàng Lan Anh",
      avatar:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png",
      bio: "IELTS 8.0, luyện giao tiếp & VSTEP B2.",
      school: "Tốt nghiệp Thạc sĩ Ngôn ngữ – ĐH Melbourne (Úc)",
    },
  },
  {
    _id: "9",
    title: "TOEIC 550+ Cấp Tốc",
    price: 500000,
    image: toeic550,
    treatment: "Ôn luyện đề, mẹo làm bài nhanh",
    description:
      "Khóa học dành cho người mới bắt đầu ôn luyện TOEIC trong thời gian ngắn. Tập trung xây nền từ vựng, ngữ pháp, và kỹ năng làm bài cho phần Listening & Reading.Lộ trình: Làm quen định dạng đề TOEIC → Ôn ngữ pháp & từ vựng trọng tâm → Kỹ năng nghe – đọc cơ bản → Luyện đề theo từng phần thi → Đề tổng hợp cuối khóa.",
    category: "TOEIC",
    targetAudience: "Sinh viên",
    teacher: {
      name: "Hoàng Lan Anh",
      avatar:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png",
      bio: "IELTS 8.0, luyện giao tiếp & VSTEP B2.",
      school: "Tốt nghiệp Thạc sĩ Ngôn ngữ – ĐH Melbourne (Úc)",
    },
  },
  {
    _id: "10",
    title: "TOEIC 550+ Cấp Tốc",
    price: 500000,
    image: toeic550,
    treatment: "Ôn luyện đề, mẹo làm bài nhanh",
    description:
      "Khóa học dành cho người mới bắt đầu ôn luyện TOEIC trong thời gian ngắn. Tập trung xây nền từ vựng, ngữ pháp, và kỹ năng làm bài cho phần Listening & Reading.Lộ trình: Làm quen định dạng đề TOEIC → Ôn ngữ pháp & từ vựng trọng tâm → Kỹ năng nghe – đọc cơ bản → Luyện đề theo từng phần thi → Đề tổng hợp cuối khóa.",
    category: "TOEIC",
    targetAudience: "Sinh viên",
    teacher: {
      name: "Hoàng Lan Anh",
      avatar:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png",
      bio: "IELTS 8.0, luyện giao tiếp & VSTEP B2.",
      school: "Tốt nghiệp Thạc sĩ Ngôn ngữ – ĐH Melbourne (Úc)",
    },
  },
  
];
export const mockFavorites = [
  "1", // _id của khóa học yêu thích
];

export const mockViewHistory = [
  {
    courseId: "1",
    viewedAt: "15-07-2025",
  },
  {
    courseId: "2",
    viewedAt: "16-07-2025",
  },
];

export const mockReviews = [
  {
    courseId: "1",
    userName: "Nguyễn Văn A",
    rating: 5,
    comment: "Khóa học rất dễ hiểu, phù hợp cho người mới.",
    createdAt: "15-07-2025",
  },
  {
    courseId: "1",
    userName: "Trần Thị B",
    rating: 4,
    comment: "Giảng viên nói chậm dễ nghe.",
    createdAt: "16-07-2025",
  },
];

export const mockTeachers = [
  {
    id: "t1",
    name: "Nguyễn Thị Mai",
    avatar:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
    bio: "IELTS 8.0, chuyên giao tiếp & TOEIC.",
    school: "Giảng viên – ĐH Ngoại ngữ – ĐHQG Hà Nội",
    nationality: "Việt Nam",
  },
  {
    id: "t2",
    name: "Trần Quốc Bảo",
    avatar:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
    bio: "VSTEP C1, luyện thi cấp tốc.",
    school: "Cựu sinh viên – ĐH Sư phạm TP.HCM",
    nationality: "Việt Nam",
  },
  {
    id: "t3",
    name: "Lê Hồng Phong",
    avatar:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/neil-sims.png",
    bio: "TOEIC 800, luyện thi A2 - B1.",
    school: "Giảng viên – Trung tâm Ngoại ngữ Apollo",
    nationality: "Việt Nam",
  },
  {
    id: "t4",
    name: "Phạm Minh Tâm",
    avatar:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
    bio: "TOEIC 700, giao tiếp cơ bản.",
    school: "Cựu giảng viên – Anh văn Hội Việt Mỹ (VUS)",
    nationality: "Việt Nam",
  },
  {
    id: "t5",
    name: "Hoàng Lan Anh",
    avatar:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png",
    bio: "IELTS 8.0, luyện giao tiếp & VSTEP B2.",
    school: "Tốt nghiệp Thạc sĩ Ngôn ngữ – ĐH Melbourne (Úc)",
    nationality: "Giáo viên bản ngữ (Úc)",
  },
];
