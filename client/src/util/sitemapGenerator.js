require("babel-register")({
  presets: ["es2016", "react"]
});

import router from "./sitemapRoutes"; // 좀 전에 만든 sitemapRoutes 파일이 있는 경로입니다.
import Sitemap from "react-router-sitemap";

function generateSitemap() {
  return (
    new Sitemap(router)
      .build("https://www.blessmusic.cf") // 여러분의 도메인 이름으로 변경해주세요.
      .save("./public/sitemap.xml") // sitemap.xml 파일이 생성될 위치입니다.
  );
}

generateSitemap();

