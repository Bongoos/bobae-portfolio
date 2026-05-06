/*
 * Portfolio Data — 이보배 포트폴리오
 * Design: Editorial Minimalism — Pretendard only
 */

export interface CareerItem {
  company: string;
  period: string;
  role: string;
}

export interface ToolItem {
  name: string;
  icon: string;
  color: string;
  textColor?: string;
  iconUrl?: string;
}

export interface VideoItem {
  label: string;
  type: 'vimeo' | 'youtube' | 'instagram-reel' | 'instagram-profile' | 'instagram-grid' | 'image' | 'video';
  url: string;
}

export interface PortfolioProject {
  id: string;
  index: number;
  tag: string;
  title: string;
  subtitle: string;
  contribution: string;
  thumbnail: string;
  videos: VideoItem[];
  overview?: string;
  strategy?: string;
  achieve?: string;
  metrics?: { label: string; value: string; note?: string }[];
}

export const profileData = {
  name: '이보배',
  nameEn: 'Bobae Lee',
  title: '콘텐츠 디자이너',
  intro: '주도적이고 새로운 시도를 추구하는 콘텐츠 디자이너 이보배입니다.',
};

export const careerData: CareerItem[] = [
  {
    company: '스푼랩스',
    period: '2025.02.17 ~ 2026.03.16',
    role: '비글루 마케팅팀 | 콘텐츠 디자이너',
  },
  {
    company: '에이앤이 텔레비전 네트웍스 코리아',
    period: '2021.02.22 ~ 2024.09.30',
    role: '달라스튜디오 디지털팀 | 라이프타임 OAP 디자이너',
  },
  {
    company: '프리랜서 디자이너',
    period: '2020.09.25 ~ 2021.02.22',
    role: '디지털 웹예능 | 웹드라마 | 커머스콘텐츠 디자이너',
  },
  {
    company: '치즈문 스튜디오',
    period: '2019.02.01 ~ 2020.09.30',
    role: '영상팀 디자이너',
  },
  {
    company: '바이탈힌트 코리아',
    period: '2018.04.02 ~ 2018.07.07',
    role: '콘텐츠 제작팀',
  },
  {
    company: '피키캐스트',
    period: '2017.05.10 ~ 2018.02.20',
    role: '엔터 3팀 디자이너',
  },
];

// Tools — PDF 2페이지의 아이콘 이미지를 그대로 추출하여 사용
const TOOL_ICONS = {
  ai: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663355438120/rbiEeMFLjOLYigIs.png',
  pr: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663355438120/PgFnHXdlmjOiJphv.png',
  ps: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663355438120/OQxWBiThfcPfchDn.png',
  ae: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663355438120/RXlntSrkuizOcPHd.png',
  figma: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663355438120/TfiHwvLFxFuRWIGs.png',
  nanobanana: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663355438120/JKLpHokmmFYOtcvd.png',
  klingai: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663355438120/VmSKtqFPRLiJwXeN.png',
};

export const toolsData: ToolItem[] = [
  { name: 'Illustrator', icon: 'Ai', color: '#330000', textColor: '#FF9A00', iconUrl: TOOL_ICONS.ai },
  { name: 'Premiere Pro', icon: 'Pr', color: '#00005B', textColor: '#9999FF', iconUrl: TOOL_ICONS.pr },
  { name: 'Photoshop', icon: 'Ps', color: '#001E36', textColor: '#31A8FF', iconUrl: TOOL_ICONS.ps },
  { name: 'After Effects', icon: 'Ae', color: '#00005B', textColor: '#9999FF', iconUrl: TOOL_ICONS.ae },
  { name: 'Figma', icon: 'Figma', color: '#1E1E1E', textColor: '#FFFFFF', iconUrl: TOOL_ICONS.figma },
  { name: 'Nanobanana', icon: 'NB', color: '#1A1A1A', textColor: '#FFD700', iconUrl: TOOL_ICONS.nanobanana },
  { name: 'Kling AI', icon: 'KL' , color: '#1A1A1A' , textColor: '#FFD700' , iconUrl: TOOL_ICONS.kling },
];

// CDN URLs — 기존 썸네일
const THUMB = {
  haemanshe: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663355438120/RtxKKIWktSmZZsgG.png',
  coin: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663355438120/tuAueSaJdTcjCEja.png',
  maltese: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663355438120/tqgoJgZxFVhYOrUf.png',
  hanna: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663355438120/GZFhqgcBRpxNOYqY.png',
  negoking: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663355438120/SUlBzyOnGXAZUCHG.png',
  osagae: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663355438120/vAEriwYDvpGXvbsY.png',
  // 새 썸네일
  snsTemplate: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663355438120/44Ta6fyaP9EgLMR8EoyRh2/sns_template_thumb_0a986d46.png',
  logoLocal: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663355438120/44Ta6fyaP9EgLMR8EoyRh2/logo_local_thumb_40996bfd.png',
  estimaking: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663355438120/44Ta6fyaP9EgLMR8EoyRh2/estimaking_thumb_db7750af.png',
};

const PAGE = {
  p01: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663355438120/gXiCiZthiqnilrqw.png',
  p02: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663355438120/ghWtBVepUJfcnSjS.png',
  p05: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663355438120/iUGdFbiTDWhLUtsA.png',
  p06: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663355438120/mRxlDyGHhRfskIBm.png',
};

// 새 첨부 이미지 CDN URLs
const ASSETS = {
  asset1: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663355438120/ekjSooSViNBHVcMI.png',
  asset2: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663355438120/tlNAjoJgAmphHgcM.png',
  asset3: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663355438120/FIVovVXOdULrrzjJ.png',
};

export const coverImage = PAGE.p01;

/*
 * Portfolio Projects — 순서 (12개):
 * 1. 인앱 프로모션 이벤트
 * 2. SNS 콘텐츠 템플릿화
 * 3. UA 비주얼 베리에이션
 * 4. 오리지널 IP 캐릭터 티징 영상
 * 5. 로고 로컬라이제이션
 * 6. 견적왕 프로그램 패키지
 * 7. 네고왕 S4
 * 8. 오늘도 사랑스럽개
 * 9. 방구석 투어
 * 10. 러브스트라이크 OOH
 * 11. AI UGC
 * 12. AI 인플루언서
 */
export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'coin-event',
    index: 1,
    tag: 'Event',
    title: '인앱 프로모션 이벤트',
    subtitle: '1000코인 시즈널 이벤트',
    contribution: '기획 30% | 제작 100%',
    thumbnail: THUMB.coin,
    videos: [
      { label: '이벤트 페이지', type: 'image', url: ASSETS.asset1 },
    ],
  },
  {
    id: 'sns-template',
    index: 2,
    tag: 'SNS',
    title: 'SNS 콘텐츠 템플릿화',
    subtitle: 'SNS 정기 프로모션 콘텐츠 템플릿 제작',
    contribution: '기획 100% | 제작 100%',
    thumbnail: THUMB.snsTemplate,
    videos: [
      { label: '인생네컷', type: 'instagram-reel', url: 'https://www.instagram.com/reels/DPgJGIcErFd/' },
      { label: 'IP 홍보 ID', type: 'instagram-reel', url: 'https://www.instagram.com/reels/DNNelYySowO/' },
    ],
  },
  {
    id: 'ua-variation',
    index: 3,
    tag: 'UA Asset',
    title: 'UA 비주얼 베리에이션',
    subtitle: 'UA 광고 소재 비주얼 베리에이션',
    contribution: '기획 50% | 제작 100%',
    thumbnail: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663355438120/44Ta6fyaP9EgLMR8EoyRh2/Gemini_Generated_Image_wbizktwbizktwbiz_1fa504bd.png',
    videos: [
      { label: 'UA_배너 타입', type: 'video', url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663355438120/44Ta6fyaP9EgLMR8EoyRh2/video_KR059P01S01_save_me_latte_kiss_epi_23_25_kr_v_bn_fake(1)_690ad113.mp4' },
      { label: 'UA_텍스트 타입', type: 'video', url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663355438120/44Ta6fyaP9EgLMR8EoyRh2/video_KR059P01S01_save_me_latte_kiss_hilight_05_12_kr_v_bn_fake_txt_2771fa7d.mp4' },
      { label: 'UA_AI 페이크 인트로 타입', type: 'video', url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663355438120/44Ta6fyaP9EgLMR8EoyRh2/15000323_en_vk_dia_0108_hilight_30-33_fake-txt_vk_hilight-03-33_f0fbf2a6.mp4' },
      { label: 'UA_텍스트 배너 타입', type: 'video', url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663355438120/44Ta6fyaP9EgLMR8EoyRh2/15000323_en_vk_dia_0108_hilight_29-34_bn-na_vk_hilight-10-34_cc0d056b.mp4' },
    ],
  },
  {
    id: 'haemanshe',
    index: 4,
    tag: 'Campaign',
    title: '오리지널 IP 캐릭터 티징 영상',
    subtitle: '[해야만 하는 쉐어하우스] 시즌2 프로모션',
    contribution: '기획 30% | 편집, 종편 100%',
    thumbnail: THUMB.haemanshe,
    videos: [
      { label: '인스타그램 릴스', type: 'instagram-reel', url: 'https://www.instagram.com/reels/DOQiKA5knB4/' },
    ],
  },
  {
    id: 'logo-localization',
    index: 5,
    tag: 'Logo Localization',
    title: '로고 로컬라이제이션',
    subtitle: '글로벌 수급 IP 로고 로컬라이제이션',
    contribution: '기획 80% | 제작 100%',
    thumbnail: THUMB.logoLocal,
    videos: [
      { label: '시크릿 오브 플레이보이', type: 'vimeo', url: 'https://vimeo.com/808663225' },
      { label: 'LA폭동 그날의 기억', type: 'vimeo', url: 'https://vimeo.com/808663289' },
      { label: '미국을 만든 기업들 토이', type: 'vimeo', url: 'https://vimeo.com/808663147' },
    ],
  },
  {
    id: 'estimaking',
    index: 6,
    tag: 'Digital',
    title: '견적왕 프로그램 패키지',
    subtitle: '신규 프로그램 런칭을 위한 프로그램 패키지 리뉴얼',
    contribution: '기획 100% | 제작 100%',
    thumbnail: THUMB.estimaking,
    videos: [
      { label: '견적왕 오프닝 타이틀', type: 'youtube', url: 'https://youtu.be/J9dOifZBIRE?si=SuEi4XlN6RWCBIuI' },
      { label: '견적왕 프로모션 영상', type: 'vimeo', url: 'https://vimeo.com/808663010' },
    ],
  },
  {
    id: 'negoking',
    index: 7,
    tag: 'Digital',
    title: '네고왕 S4',
    subtitle: '신규 시즌 런칭을 위한 프로그램 패키지 리뉴얼',
    contribution: '기획 50% | 제작 100%',
    thumbnail: THUMB.negoking,
    videos: [
      { label: '네고왕 S4 오프닝', type: 'vimeo', url: 'https://vimeo.com/808663044' },
    ],
  },
  {
    id: 'osagae',
    index: 8,
    tag: 'Channel',
    title: '오늘도 사랑스럽개',
    subtitle: '오리지널 드라마 채널 어셋 구축',
    contribution: '기획 100% | 제작 100%',
    thumbnail: THUMB.osagae,
    videos: [
      { label: '팝업', type: 'vimeo', url: 'https://vimeo.com/1035087086' },
      { label: '연령고지', type: 'vimeo', url: 'https://vimeo.com/1035086960' },
      { label: '채널아트', type: 'image', url: ASSETS.asset2 },
      { label: '이벤트 페이지', type: 'image', url: ASSETS.asset3 },
    ],
  },
  {
    id: 'bangguseok-tour',
    index: 9,
    tag: 'Channel',
    title: '방구석 투어',
    subtitle: '시즌 특집 편성 프로모션 영상 제작',
    contribution: '기획 100% | 제작 100%',
    thumbnail: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663355438120/44Ta6fyaP9EgLMR8EoyRh2/promo_9b5a2fa8.jpg',
    videos: [
      { label: '방구석 투어 프로모션', type: 'vimeo', url: 'https://vimeo.com/1035085329?fl=pl&fe=sh' },
    ],
  },
  {
    id: 'lovestrike-ooh',
    index: 10,
    tag: 'OOH',
    title: '러브스트라이크 OOH',
    subtitle: '오리지널 IP 프로모션을 위한 OOH 제작',
    contribution: '기획 50% | 제작 100%',
    thumbnail: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663355438120/44Ta6fyaP9EgLMR8EoyRh2/OOH_a4844f01.png',
    videos: [
      { label: '러브스트라이크 OOH', type: 'vimeo', url: 'https://vimeo.com/1166565082' },
    ],
  },
  {
    id: 'ai-ugc',
    index: 11,
    tag: 'UGC',
    title: 'AI UGC',
    subtitle: '[로맨틱 아일랜드] AI 리액션 영상',
    contribution: '기획 100% | 제작 100%',
    thumbnail: THUMB.maltese,
    videos: [
      { label: 'AI UGC 영상', type: 'vimeo', url: 'https://vimeo.com/1164920222' },
    ],
  },
  {
    id: 'ai-influencer',
    index: 12,
    tag: 'Influencer',
    title: 'AI 인플루언서',
    subtitle: '오리지널 AI IP 캐릭터 기반 SNS 확장 실험',
    contribution: '기획 50% | 제작 100%',
    thumbnail: THUMB.hanna,
    videos: [
      { label: '인스타그램', type: 'instagram-grid', url: 'https://www.instagram.com/hannah.cho.i/' },
    ],
  },
];
