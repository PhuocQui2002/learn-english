import toeicImg from "../assets/images/Toeic.png";
import toeic550 from "../assets/images/Toeic550.1.png";

import giaotiep from "../assets/images/giaotiep.png";
import giaotiep2 from "../assets/images/giaotiep2.png";
import toeic700 from "../assets/images/toeic700.png";
import Ielts7 from "../assets/images/Ielts7.png";
import Ielts6 from "../assets/images/Ielts6+.png";
import vsttepc from "../assets/images/vstepc.png";
import hat from "../assets/images/hat.png";

import b1 from "../assets/images/b1.png";
import nentang from "../assets/images/nentang.png";

export const mockCourses = [
  {
    _id: "1",
    title: "Khóa học giao tiếp ",
    price: 149000,
    image: giaotiep,
    treatment: "học phát âm, từ vựng, ngữ pháp",
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
    price: 350000,
    image: toeic700,
    treatment: "Ôn luyện đề, mẹo làm bài nhanh",
    description:
      "Khóa học dành cho người đã có nền tảng, cần đạt TOEIC 700+ trong thời gian ngắn. Tập trung luyện đề chuyên sâu, chiến lược làm bài nhanh và mẹo xử lý các dạng câu hỏi Listening & Reading. Nội dung bám sát đề thi thật, giúp tăng tốc độ và độ chính xác.",
    category: "TOEIC",
    targetAudience: "Sinh viên",
    teacher: {
      name: "Lê Hồng Phong",
      avatar:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/neil-sims.png",
      bio: "TOEIC 800, luyện thi A2 - B1.",
      school: "Giảng viên – Trung tâm Ngoại ngữ Apollo",
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
    category: "Vstep",
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
    _id: "4",
    title: "Khóa học nền tảng",
    price: 450000,
    image: nentang,
    treatment: "Học bốn kỹ năng cơ bản",
    description:
      "Khóa học nền tảng được thiết kế dành riêng cho những người mới bắt đầu hoặc đã mất gốc tiếng Anh. Nội dung tập trung xây dựng lại kiến thức cơ bản từ đầu như phát âm, từ vựng, ngữ pháp và kỹ năng nghe – nói – đọc – viết ở mức đơn giản nhất. Học viên sẽ từng bước làm quen với cấu trúc đề TOEIC, được hướng dẫn cách làm bài hiệu quả và luyện đề thực tế để tăng tốc độ làm bà",
    category: "Nền tảng",
    targetAudience: "Sinh viên",
    teacher: {
      name: "Phạm Minh Tâm",
      avatar:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
      bio: "TOEIC 700, giao tiếp cơ bản.",
      school: "Cựu giảng viên – Anh văn Hội Việt Mỹ (VUS)",
    },
  },
  {
    _id: "6",
    title: "TOEIC 550+ Cấp Tốc",
    price: 510000,
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
    _id: "5",
    title: "Khóa học Giao tiếp Nâng cao",
    price: 350000,
    image: giaotiep2,
    treatment: "Phản xạ nhanh – Giao tiếp thực tế",
    description:
      "Khóa học dành cho người đã có nền tảng tiếng Anh cơ bản, mong muốn cải thiện phản xạ và giao tiếp linh hoạt trong môi trường học tập, làm việc hoặc du lịch.\n\nLộ trình học:\n1. Ôn tập nhanh cấu trúc – từ vựng giao tiếp nền tảng\n2. Luyện phản xạ nghe – nói theo tình huống đời thực\n3. Thực hành hội thoại nhóm, cặp đôi, và trình bày cá nhân\n4. Tăng cường phát âm, ngữ điệu tự nhiên (intonation)\n5. Thảo luận – tranh luận theo chủ đề nâng cao\n\nKết quả đạt được:\n• Tự tin tham gia hội thoại, phỏng vấn, làm việc nhóm\n• Giao tiếp tự nhiên với người bản xứ\n• Tăng tốc độ phản xạ tiếng Anh trong các tình huống thực tế",
    category: "Giao tiếp",
    targetAudience: "Sinh viên, người đi làm có nền tảng cơ bản",
    teacher: {
      name: "Hoàng Lan Anh",
      avatar:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png",
      bio: "IELTS 8.0, luyện giao tiếp & VSTEP B2.",
      school:
        "Tốt nghiệp Thạc sĩ Giảng dạy Tiếng Anh (TESOL) – Đại học Melbourne, Úc",
    },
  },
  {
    _id: "7",
    title: "IELTS 6.0+ cho người mới",
    price: 520000,
    image: Ielts6,
    treatment: "Học 4 kỹ năng – Mẹo làm bài hiệu quả",
    description:
      "Khóa học dành cho người mới bắt đầu luyện IELTS, xây nền tảng từ vựng – ngữ pháp – phát âm, và làm quen cấu trúc đề thi.\n\nLộ trình:\n1. Làm quen đề IELTS (Academic & General)\n2. Ôn ngữ pháp, từ vựng theo chủ đề\n3. Rèn luyện 4 kỹ năng (Nghe – Nói – Đọc – Viết)\n4. Thực hành từng dạng bài thi thật\n5. Luyện đề tổng hợp – sửa chi tiết\n\nKết quả:\n• Nắm chắc cấu trúc đề thi\n• Viết & nói học thuật tốt hơn\n• Tự tin đạt IELTS 6.0+",
    category: "IELTS",
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
    title: "VSTEP C1 Cấp Tốc",
    price: 600000,
    image: vsttepc,
    category: "Vstep",
    treatment: "Ôn luyện đề nâng cao, chiến lược đạt C1",
    description:
      "Khóa học dành cho người đã đạt trình độ B2 và cần luyện thi VSTEP để đạt chuẩn C1. Tập trung vào cấu trúc đề, chiến lược làm bài và nâng cao kỹ năng học thuật.\n\nLộ trình: Làm quen định dạng đề VSTEP C1 → Củng cố từ vựng & cấu trúc học thuật → Luyện 4 kỹ năng theo dạng bài thi → Chiến lược viết & nói nâng cao → Luyện đề tổng hợp & sửa bài chi tiết.",
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
    _id: "9",
    title: "IELTS 7.0+ Nâng cao",
    price: 510000,
    image: Ielts7,
    treatment: "Ôn luyện đề, mẹo làm bài nhanh",
    description:
      "Khóa học dành cho học viên đã đạt IELTS 6.0–6.5 và muốn nâng cao toàn diện 4 kỹ năng để chinh phục mốc 7.0+.\n\nLộ trình: Ôn từ vựng & ngữ pháp học thuật → Kỹ thuật làm bài nâng cao → Phân tích lỗi sai thường gặp → Luyện đề full test theo format mới → Sửa bài chi tiết, nâng band từng kỹ năng.",
    category: "IELTS",
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
    title: "Khóa học hát cho trẻ em",
    price: 210000,
    image: hat,
    treatment: "Luyên hát tiếng Anh cho trẻ em",
    description:
      "Khóa học dành cho trẻ em từ 6-12 tuổi, giúp các bé yêu thích tiếng Anh qua các bài hát vui nhộn, dễ nhớ. Nội dung học bao gồm từ vựng cơ bản, phát âm chuẩn và kỹ năng nghe – nói thông qua âm nhạc.",
    category: "Nền tảng",
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
