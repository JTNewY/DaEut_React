// npm install axios
import axios from 'axios';

// 파트너 조회
export const partnerMypage = (userNo) => axios.get(`/partner/${userNo}`)

// 파트너 수정
export const partnerMypageUpdatePro = () => axios.put("/partner", {userName, introduce})

// 파트너 탈퇴
export const deleteUser = (userNo) => axios.delete(`/partner/${userNo}`)

// 파트너 리뷰
export const getReviewsByPartnerNo = (partnerNo) => axios.get(`partner/${partnerNo}`)

// 파트너 예약
export const partnerReservation = (partnerNo) => axios.get()