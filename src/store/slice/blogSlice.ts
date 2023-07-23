import { BlogState } from "@/interface/blog";
import { createSlice } from "@reduxjs/toolkit";

const initialState: BlogState = [
  {
    key: "1",
    name: "Exciting Adventures in Extreme Sports",
    description: "Embark on thrilling adventures in the world of extreme sports!",
    newPublished: true,
    datePublished: "2023-07-22",
    coverImage: "https://minimal-kit-react.vercel.app/assets/images/products/product_1.jpg",
    category: "Sport",
    author: "John Smith",
    authorImage:
      "https://www.pngkit.com/png/detail/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png",
  },
  {
    key: "2",
    name: "The Wonders of Science: Unraveling the Universe",
    description: "Dive into the depths of scientific discoveries and cosmic mysteries.",
    coverImage: "https://minimal-kit-react.vercel.app/assets/images/products/product_1.jpg",
    newPublished: false,
    datePublished: "2023-07-15",
    category: "Scientific",
    author: "Ali Seyedi",
    authorImage:
      "https://www.pngkit.com/png/detail/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png",
  },
  {
    key: "3",
    name: "Unveiling Cultural Riches: A Journey Across Traditions",
    description: "Embark on a cultural odyssey, exploring the beauty of diverse traditions.",
    coverImage: "https://minimal-kit-react.vercel.app/assets/images/products/product_1.jpg",
    newPublished: true,
    datePublished: "2023-07-10",
    category: "Cultural",
    author: "Hamid Sori",
    authorImage:
      "https://www.pngkit.com/png/detail/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png",
  },
  {
    key: "4",
    name: "Healthy Eating Habits: Nourishing Your Body",
    description: "Discover the secrets of maintaining a balanced and healthy diet.",
    coverImage: "https://minimal-kit-react.vercel.app/assets/images/products/product_1.jpg",
    newPublished: false,
    datePublished: "2023-07-05",
    category: "Health",
    author: "Emma Johnson",
    authorImage:
      "https://www.pngkit.com/png/detail/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png",
  },
  {
    key: "5",
    name: "Tech Innovations: Shaping the Future",
    description: "Explore the latest technological advancements shaping our future.",
    coverImage: "https://minimal-kit-react.vercel.app/assets/images/products/product_1.jpg",
    newPublished: true,
    datePublished: "2023-06-30",
    category: "Technology",
    author: "Michael Lee",
    authorImage:
      "https://www.pngkit.com/png/detail/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png",
  },
  {
    key: "6",
    name: "Travel Diaries: Wanderlust Chronicles",
    description: "Embark on a journey across breathtaking destinations and cultures.",
    coverImage: "https://minimal-kit-react.vercel.app/assets/images/products/product_1.jpg",
    newPublished: false,
    datePublished: "2023-06-25",
    category: "Travel",
    author: "Sophia Martinez",
    authorImage:
      "https://www.pngkit.com/png/detail/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png",
  },
  {
    key: "7",
    name: "Art and Expression: Colors of Creativity",
    description: "Immerse yourself in the world of art and the beauty of human expression.",
    coverImage: "https://minimal-kit-react.vercel.app/assets/images/products/product_1.jpg",
    newPublished: true,
    datePublished: "2023-06-20",
    category: "Art",
    author: "David Williams",
    authorImage:
      "https://www.pngkit.com/png/detail/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png",
  },
  {
    key: "8",
    name: "The World of Books: A Literary Adventure",
    description: "Explore the magic of literature and the impact of books on our lives.",
    coverImage: "https://minimal-kit-react.vercel.app/assets/images/products/product_1.jpg",
    newPublished: false,
    datePublished: "2023-06-15",
    category: "Books",
    author: "Isabella Turner",
    authorImage:
      "https://www.pngkit.com/png/detail/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png",
  },
  {
    key: "9",
    name: "Mindfulness and Mental Well-being",
    description: "Learn the art of mindfulness and its positive impact on mental well-being.",
    coverImage: "https://minimal-kit-react.vercel.app/assets/images/products/product_1.jpg",
    newPublished: true,
    datePublished: "2023-06-10",
    category: "Wellness",
    author: "Matthew Green",
    authorImage:
      "https://www.pngkit.com/png/detail/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png",
  },
  {
    key: "10",
    name: "Culinary Delights: Tasting the World",
    description: "Embark on a gastronomic adventure, savoring diverse culinary delights.",
    coverImage: "https://minimal-kit-react.vercel.app/assets/images/products/product_1.jpg",
    newPublished: false,
    datePublished: "2023-06-05",
    category: "Food",
    author: "Linda Wilson",
    authorImage:
      "https://www.pngkit.com/png/detail/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png",
  },
  {
    key: "11",
    name: "Green Living: Sustainable Choices",
    description: "Discover the path to sustainable living and eco-friendly practices.",
    coverImage: "https://minimal-kit-react.vercel.app/assets/images/products/product_1.jpg",
    newPublished: true,
    datePublished: "2023-06-01",
    category: "Environment",
    author: "Robert Davis",
    authorImage:
      "https://www.pngkit.com/png/detail/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png",
  },
  {
    key: "12",
    name: "Fashion Forward: Trends and Style",
    description: "Stay updated with the latest fashion trends and express your unique style.",
    coverImage: "https://minimal-kit-react.vercel.app/assets/images/products/product_1.jpg",
    newPublished: false,
    datePublished: "2023-05-25",
    category: "Fashion",
    author: "Emily Clark",
    authorImage:
      "https://www.pngkit.com/png/detail/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png",
  },
  {
    key: "13",
    name: "Fitness Fundamentals: Your Journey to a Fitter You",
    description: "Embark on a fitness journey and embrace a healthier lifestyle.",
    coverImage: "https://minimal-kit-react.vercel.app/assets/images/products/product_1.jpg",
    newPublished: true,
    datePublished: "2023-05-20",
    category: "Fitness",
    author: "Daniel White",
    authorImage:
      "https://www.pngkit.com/png/detail/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png",
  },
  {
    key: "14",
    name: "Pets and Companionship: Nurturing Animal Bonds",
    description: "Discover the joy and significance of having pets as loyal companions.",
    coverImage: "https://minimal-kit-react.vercel.app/assets/images/products/product_1.jpg",
    newPublished: false,
    datePublished: "2023-05-15",
    category: "Pets",
    author: "Olivia Baker",
    authorImage:
      "https://www.pngkit.com/png/detail/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png",
  },
  {
    key: "15",
    name: "Photography Exploration: Capturing Moments",
    description: "Embark on a photographic journey, capturing the beauty of fleeting moments.",
    coverImage: "https://minimal-kit-react.vercel.app/assets/images/products/product_1.jpg",
    newPublished: true,
    datePublished: "2023-05-10",
    category: "Photography",
    author: "William Scott",
    authorImage:
      "https://www.pngkit.com/png/detail/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png",
  },
];

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    remove: (state, action) => {
      const key = action.payload;
      return state.filter((blog) => blog.key !== key);
    },
    add: (state, action) => {
      const newBlog = action.payload;
      return [...state, newBlog];
    },
    edit: (state, action) => {
      const updatedBlog = action.payload;
      return state.map((blog) => {
        if (blog.key === updatedBlog.key) {
          return { ...blog, ...updatedBlog };
        }
        return blog;
      });
    },
  },
});

export const { remove, add, edit } = blogSlice.actions;

export default blogSlice.reducer;
