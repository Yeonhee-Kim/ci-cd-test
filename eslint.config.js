// eslint.config.js (Flat Config 형식)
import { flat } from "eslint-config-flat";

export default [
  {
    files: ["*.js"],
    languageOptions: {
      globals: {
        // 여기에 환경 변수를 정의합니다.
        console: "readonly",
        window: "readonly",
        document: "readonly",
        // 필요한 환경 추가
      },
    },
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
    },
  },
];