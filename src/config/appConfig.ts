interface AppConfig {
  baseUrl: string;
}

const appConfig: AppConfig = {
  baseUrl:
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://freetestapi.com/api/v1/books",
};

export default appConfig;
