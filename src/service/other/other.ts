import { hyhRequest, czcRequest } from ".."

enum OtherAPI {
  getAllAnnouncements = "/announcement/getAllAnnouncements", // 加载所有公告
  getAllAQ = "/frequently-aq/getAllAQ", // 加载常见问题
  loadAllImages = "/indeximages/loadAllImages" // 加载首页图片
}

export function getAllAnnouncements() {
  return czcRequest.post<any>({
    url: OtherAPI.getAllAnnouncements
  })
}

export function loadAllImages() {
  return czcRequest.post<any>({
    url: OtherAPI.loadAllImages
  })
}

export function getAllAQ() {
  return czcRequest.get<any>({
    url: OtherAPI.getAllAQ
  })
}
