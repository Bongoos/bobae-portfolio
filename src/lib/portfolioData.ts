import ontheAiThumb from '@/assets/onthe-ai-thumb.png';
import bangguseokThumb from '@/assets/bangguseok-thumb.jpg';
import snsTemplateThumb from '@/assets/sns-template-thumb.jpg';
import logoLocalizationThumb from '@/assets/logo-localization-thumb.png';
import estimakingThumb from '@/assets/estimaking-thumb.png';
import aiUgcThumb from '@/assets/ai-ugc-thumb.jpg';
import lovestrikeOohThumb from '@/assets/lovestrike-ooh-thumb.jpg';
import coverImageLocal from '@/assets/cover-image.jpg';
import negokingThumb from '@/assets/negoking-thumb.jpg';
import osagaeChannelArt from '@/assets/osagae-channel-art.jpg';
import haemansheThumb from '@/assets/haemanshe-thumb.jpg';
import coinEventThumb from '@/assets/coin-event-thumb.jpg';
import coinEventPage from '@/assets/coin-event-page.jpg';
import uaVariationThumb from '@/assets/ua-variation-thumb.jpg';
import osagaeThumb from '@/assets/osagae-thumb.jpg';
import osagaeEventPage from '@/assets/osagae-event-page.jpg';
import aiInfluencerThumb from '@/assets/ai-influencer-thumb.jpg';
/*
 * Portfolio Data — 이보배 포트폴리오
 * Design: Editorial Minimalism — Pretendard only
 */

export interface CareerItem {
  company: string;
  period: string;
  role: string;
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

export const coverImage = coverImageLocal;

/*
 * Portfolio Projects — 순서 (13개):
 * 1. 네고왕 S4
 * 2. 견적왕 프로그램 패키지
 * 3. AI 솔루션 광고소재
 * 4. 오리지널 IP 캐릭터 티징 영상
 * 5. UA 비주얼 베리에이션
 * 6. SNS 콘텐츠 템플릿화
 * 7. 방구석 투어
 * 8. 오늘도 사랑스럽개
 * 9. 로고 로컬라이제이션
 * 10. 러브스트라이크 OOH
 * 11. 인앱 프로모션 이벤트
 * 12. AI UGC
 * 13. AI 인플루언서
 */
export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'negoking',
    index: 1,
    tag: 'Digital',
    title: '네고왕 S4',
    subtitle: '신규 시즌 런칭을 위한 프로그램 패키지 리뉴얼',
    contribution: '기획 50% | 제작 100%',
    thumbnail: negokingThumb,
    videos: [
      { label: '네고왕 S4 오프닝', type: 'vimeo', url: 'https://vimeo.com/808663044' },
    ],
  },
  {
    id: 'estimaking',
    index: 2,
    tag: 'Digital',
    title: '견적왕 프로그램 패키지',
    subtitle: '신규 프로그램 런칭을 위한 프로그램 패키지 리뉴얼',
    contribution: '기획 100% | 제작 100%',
    thumbnail: estimakingThumb,
    videos: [
      { label: '견적왕 오프닝 타이틀', type: 'youtube', url: 'https://youtu.be/J9dOifZBIRE?si=SuEi4XlN6RWCBIuI' },
      { label: '견적왕 프로모션 영상', type: 'vimeo', url: 'https://vimeo.com/808663010' },
    ],
  },
  {
    id: 'onthe-ai',
    index: 3,
    tag: 'AI Solution',
    title: 'AI 솔루션 광고소재',
    subtitle: '30분 무료 상담 유도 광고 소재',
    contribution: '제작 100%',
    thumbnail: ontheAiThumb,
    videos: [
      { label: '온더AI 마케팅소재', type: 'vimeo', url: 'https://vimeo.com/1219764498' },
    ],
  },
  {
    id: 'haemanshe',
    index: 4,
    tag: 'Campaign',
    title: '오리지널 IP 캐릭터 티징 영상',
    subtitle: '[해야만 하는 쉐어하우스] 시즌2 프로모션',
    contribution: '기획 30% | 편집, 종편 100%',
    thumbnail: haemansheThumb,
    videos: [
      { label: '인스타그램 릴스', type: 'instagram-reel', url: 'https://www.instagram.com/reels/DOQiKA5knB4/' },
    ],
  },
  {
    id: 'ua-variation',
    index: 5,
    tag: 'UA Asset',
    title: 'UA 비주얼 베리에이션',
    subtitle: 'UA 광고 소재 비주얼 베리에이션',
    contribution: '기획 50% | 제작 100%',
    thumbnail: uaVariationThumb,
    videos: [
      { label: 'UA_배너 타입', type: 'video', url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663355438120/44Ta6fyaP9EgLMR8EoyRh2/video_KR059P01S01_save_me_latte_kiss_epi_23_25_kr_v_bn_fake(1)_690ad113.mp4' },
      { label: 'UA_텍스트 타입', type: 'video', url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663355438120/44Ta6fyaP9EgLMR8EoyRh2/video_KR059P01S01_save_me_latte_kiss_hilight_05_12_kr_v_bn_fake_txt_2771fa7d.mp4' },
      { label: 'UA_AI 페이크 인트로 타입', type: 'video', url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663355438120/44Ta6fyaP9EgLMR8EoyRh2/15000323_en_vk_dia_0108_hilight_30-33_fake-txt_vk_hilight-03-33_f0fbf2a6.mp4' },
      { label: 'UA_텍스트 배너 타입', type: 'video', url: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663355438120/44Ta6fyaP9EgLMR8EoyRh2/15000323_en_vk_dia_0108_hilight_29-34_bn-na_vk_hilight-10-34_cc0d056b.mp4' },
    ],
  },
  {
    id: 'sns-template',
    index: 6,
    tag: 'SNS',
    title: 'SNS 콘텐츠 템플릿화',
    subtitle: 'SNS 정기 프로모션 콘텐츠 템플릿 제작',
    contribution: '기획 100% | 제작 100%',
    thumbnail: snsTemplateThumb,
    videos: [
      { label: '인생네컷', type: 'instagram-reel', url: 'https://www.instagram.com/reels/DPgJGIcErFd/' },
      { label: 'IP 홍보 ID', type: 'instagram-reel', url: 'https://www.instagram.com/reels/DNNelYySowO/' },
    ],
  },
  {
    id: 'bangguseok-tour',
    index: 7,
    tag: 'Channel',
    title: '방구석 투어',
    subtitle: '시즌 특집 편성 프로모션 영상 제작',
    contribution: '기획 100% | 제작 100%',
    thumbnail: bangguseokThumb,
    videos: [
      { label: '방구석 투어 프로모션', type: 'vimeo', url: 'https://vimeo.com/1035085329?fl=pl&fe=sh' },
    ],
  },
  {
    id: 'osagae',
    index: 8,
    tag: 'Channel',
    title: '오늘도 사랑스럽개',
    subtitle: '오리지널 드라마 채널 어셋 구축',
    contribution: '기획 100% | 제작 100%',
    thumbnail: osagaeThumb,
    videos: [
      { label: '팝업', type: 'vimeo', url: 'https://vimeo.com/1035087086' },
      { label: '연령고지', type: 'vimeo', url: 'https://vimeo.com/1035086960' },
      { label: '채널아트', type: 'image', url: osagaeChannelArt },
      { label: '이벤트 페이지', type: 'image', url: osagaeEventPage },
    ],
  },
  {
    id: 'logo-localization',
    index: 9,
    tag: 'Logo Localization',
    title: '로고 로컬라이제이션',
    subtitle: '글로벌 수급 IP 로고 로컬라이제이션',
    contribution: '기획 80% | 제작 100%',
    thumbnail: logoLocalizationThumb,
    videos: [
      { label: '시크릿 오브 플레이보이', type: 'vimeo', url: 'https://vimeo.com/808663225' },
      { label: 'LA폭동 그날의 기억', type: 'vimeo', url: 'https://vimeo.com/808663289' },
      { label: '미국을 만든 기업들 토이', type: 'vimeo', url: 'https://vimeo.com/808663147' },
    ],
  },
  {
    id: 'lovestrike-ooh',
    index: 10,
    tag: 'OOH',
    title: '러브스트라이크 OOH',
    subtitle: '오리지널 IP 프로모션을 위한 OOH 제작',
    contribution: '기획 50% | 제작 100%',
    thumbnail: lovestrikeOohThumb,
    videos: [
      { label: '러브스트라이크 OOH', type: 'vimeo', url: 'https://vimeo.com/1166565082' },
    ],
  },
  {
    id: 'coin-event',
    index: 11,
    tag: 'Event',
    title: '인앱 프로모션 이벤트',
    subtitle: '1000코인 시즈널 이벤트',
    contribution: '기획 30% | 제작 100%',
    thumbnail: coinEventThumb,
    videos: [
      { label: '이벤트 페이지', type: 'image', url: coinEventPage },
    ],
  },
  {
    id: 'ai-ugc',
    index: 12,
    tag: 'UGC',
    title: 'AI UGC',
    subtitle: '[로맨틱 아일랜드] AI 리액션 영상',
    contribution: '기획 100% | 제작 100%',
    thumbnail: aiUgcThumb,
    videos: [
      { label: 'AI UGC 영상', type: 'vimeo', url: 'https://vimeo.com/1164920222' },
    ],
  },
  {
    id: 'ai-influencer',
    index: 13,
    tag: 'Influencer',
    title: 'AI 인플루언서',
    subtitle: '오리지널 AI IP 캐릭터 기반 SNS 확장 실험',
    contribution: '기획 50% | 제작 100%',
    thumbnail: aiInfluencerThumb,
    videos: [
      { label: '인스타그램', type: 'instagram-grid', url: 'https://www.instagram.com/hannah.cho.i/' },
    ],
  },
];
