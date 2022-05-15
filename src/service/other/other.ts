import { hyhRequest } from ".."

enum OtherAPI {
  getAllAnnouncements = "/announcement/getAllAnnouncements", // 加载所有公告
  getAllAQ = "/frequently-aq/getAllAQ", // 加载常见问题
  loadAllImages = "/indeximages/loadAllImages" // 加载首页图片
}

export function getAllAnnouncements() {
  return hyhRequest.post<any>({
    url: OtherAPI.getAllAnnouncements
  })
}

export function loadAllImages() {
  return hyhRequest.get<any>({
    url: OtherAPI.loadAllImages
  })
}

export function getAllAQ() {
  return hyhRequest.post<any>({
    url: OtherAPI.getAllAQ
  })
}
