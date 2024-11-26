interface AppConfig {
  logo: string;
  app_name: string;
  app_description: string;
  baseUrl: string;
}

const appConfig: AppConfig = {
  logo: "/logo.png",
  app_name: "Library",
  app_description: "Test Library",
  baseUrl:
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://www.freetestapi.com/apis/books",
};

export default appConfig;
