/*
 * ProjectModal — 포트폴리오 프로젝트 상세 모달
 * 좌측 정렬 및 행간 축소 디자인 반영
 * 썸네일 클릭 시 영상/이미지만 표시 (추가 설명 전부 삭제)
 * Vimeo → iframe embed
 * YouTube → iframe embed
 * Instagram Reel → iframe embed (사이트 내 재생)
 * Instagram Grid → 프로필 링크 카드
 * Image → 이미지만 표시
 * Video → mp4 직접 재생
 */
import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { PortfolioProject, VideoItem } from '@/lib/portfolioData';

interface ProjectModalProps {
  project: PortfolioProject | null;
  isOpen: boolean;
  onClose: () => void;
  initialVideoIndex?: number;
}

function getVimeoEmbedUrl(url: string): string {
  const match = url.match(/vimeo\.com\/(\d+)/);
  if (match) {
    return `https://player.vimeo.com/video/${match[1]}?autoplay=1&title=0&byline=0&portrait=0`;
  }
  return url;
}

function getYouTubeEmbedUrl(url: string): string {
  // Handle youtu.be short links
  const shortMatch = url.match(/youtu\.be\/([\w-]+)/);
  if (shortMatch) {
    return `https://www.youtube.com/embed/${shortMatch[1]}?autoplay=1&rel=0`;
  }
  // Handle youtube.com/watch?v= links
  const longMatch = url.match(/youtube\.com\/watch\?v=([\w-]+)/);
  if (longMatch) {
    return `https://www.youtube.com/embed/${longMatch[1]}?autoplay=1&rel=0`;
  }
  // Handle youtube.com/embed/ links (already embedded)
  const embedMatch = url.match(/youtube\.com\/embed\/([\w-]+)/);
  if (embedMatch) {
    return `https://www.youtube.com/embed/${embedMatch[1]}?autoplay=1&rel=0`;
  }
  return url;
}

function getInstagramReelEmbedUrl(url: string): string {
  const reelMatch = url.match(/instagram\.com\/reels?\/([\w-]+)/);
  if (reelMatch) {
    return `https://www.instagram.com/reel/${reelMatch[1]}/embed/`;
  }
  return url;
}

function getInstagramUsername(url: string): string {
  const profileMatch = url.match(/instagram\.com\/([\w.]+)/);
  return profileMatch ? profileMatch[1] : '';
}

function VideoPlayer({ video }: { video: VideoItem }) {
  if (video.type === 'vimeo') {
    return (
      <div className="w-full aspect-video rounded-xl overflow-hidden bg-black">
        <iframe
          src={getVimeoEmbedUrl(video.url)}
          className="w-full h-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={video.label}
        />
      </div>
    );
  }

  if (video.type === 'youtube') {
    return (
      <div className="w-full aspect-video rounded-xl overflow-hidden bg-black">
        <iframe
          src={getYouTubeEmbedUrl(video.url)}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          title={video.label}
        />
      </div>
    );
  }

  if (video.type === 'instagram-reel') {
    return (
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[540px] rounded-xl overflow-hidden bg-white">
          <iframe
            src={getInstagramReelEmbedUrl(video.url)}
            className="w-full border-0"
            style={{ minHeight: '680px' }}
            allowFullScreen
            title={video.label}
          />
        </div>
      </div>
    );
  }

  if (video.type === 'instagram-grid') {
    const username = getInstagramUsername(video.url);
    return (
      <div className="w-full flex flex-col items-center justify-center py-8">
        {/* Instagram Profile Card */}
        <a
          href={video.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-8 flex flex-col items-center gap-5 hover:shadow-lg hover:border-[#F27920]/30 transition-all duration-300"
        >
          {/* Profile Icon */}
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[3px]">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </div>
          </div>

          {/* Username */}
          <div className="text-center">
            <p className="text-lg font-bold text-gray-900 group-hover:text-[#F27920] transition-colors">@{username}</p>
            <p className="text-sm text-gray-500 mt-1">Instagram</p>
          </div>

          {/* CTA Button */}
          <div className="px-6 py-2.5 bg-[#F27920] text-white text-sm font-semibold rounded-lg group-hover:bg-[#d96a18] transition-colors">
            프로필 보기
          </div>
        </a>

        <p className="mt-5 text-xs text-gray-400">클릭하면 Instagram으로 이동합니다</p>
      </div>
    );
  }

  if (video.type === 'instagram-profile') {
    return (
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[540px] rounded-xl overflow-hidden bg-white">
          <iframe
            src={`https://www.instagram.com/${getInstagramUsername(video.url)}/embed/`}
            className="w-full border-0"
            style={{ minHeight: '680px' }}
            allowFullScreen
            title={video.label}
          />
        </div>
      </div>
    );
  }

  if (video.type === 'video') {
    return (
      <div className="w-full aspect-video rounded-xl overflow-hidden bg-black">
        <video
          src={video.url}
          className="w-full h-full object-contain"
          controls
          autoPlay
          playsInline
          preload="metadata"
          title={video.label}
        />
      </div>
    );
  }

  // image type
  return (
    <div className="w-full">
      <img
        src={video.url}
        alt={video.label}
        className="w-full h-auto rounded-xl"
        loading="lazy"
      />
    </div>
  );
}

export default function ProjectModal({ project, isOpen, onClose, initialVideoIndex }: ProjectModalProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeVideoIdx, setActiveVideoIdx] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const idx = initialVideoIndex !== undefined && project && initialVideoIndex < project.videos.length
        ? initialVideoIndex
        : 0;
      setActiveVideoIdx(idx);
      if (scrollRef.current) {
        scrollRef.current.scrollTop = 0;
      }
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, initialVideoIndex, project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!project) return null;

  const hasMultipleVideos = project.videos.length > 1;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-4xl mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden"
            style={{ maxHeight: '90vh' }}
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header — 타이틀 + 닫기 버튼만 */}
            <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm border-b border-gray-100 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold px-3 py-1 rounded-full text-white bg-[#F27920]">
                  {project.tag}
                </span>
                <h2 className="text-lg font-bold text-gray-900">{project.title}</h2>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                aria-label="닫기"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Scrollable Content — 영상/이미지만 표시, 추가 설명 없음 */}
            <div ref={scrollRef} className="overflow-y-auto" style={{ maxHeight: 'calc(90vh - 72px)' }}>
              <div className="p-6 space-y-4">
                {/* Video tabs if multiple */}
                {hasMultipleVideos && (
                  <div className="flex flex-wrap gap-2">
                    {project.videos.map((v, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveVideoIdx(idx)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          activeVideoIdx === idx
                            ? 'bg-[#F27920] text-white'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {v.label}
                      </button>
                    ))}
                  </div>
                )}

                {/* Video/Image player only */}
                {project.videos.length > 0 && (
                  <VideoPlayer video={project.videos[activeVideoIdx]} />
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
