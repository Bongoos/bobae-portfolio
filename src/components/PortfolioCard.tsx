/*
 * PortfolioCard — 포트폴리오 프로젝트 카드
 * 16:9 비율 썸네일, 라운드 코너
 * 카테고리 박스 컬러 #F27920 통일
 * 공란 프로젝트(썸네일 없음)는 플레이스홀더로 표시
 */
import { motion } from 'framer-motion';
import { Play, Clock } from 'lucide-react';
import type { PortfolioProject } from '@/lib/portfolioData';

interface PortfolioCardProps {
  project: PortfolioProject;
  onClick: () => void;
  delay?: number;
}

export default function PortfolioCard({ project, onClick, delay = 0 }: PortfolioCardProps) {
  const hasVideo = project.videos.some(v => v.type === 'vimeo' || v.type === 'instagram-reel' || v.type === 'youtube' || v.type === 'video');
  const isEmpty = !project.thumbnail && project.videos.length === 0;

  return (
    <motion.div
      className={`group ${isEmpty ? 'cursor-default' : 'cursor-pointer'}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      onClick={isEmpty ? undefined : onClick}
    >
      {/* Thumbnail — 16:9 ratio, rounded corners */}
      <div className="relative aspect-video rounded-xl overflow-hidden shadow-md group-hover:shadow-xl transition-shadow duration-500">
        {isEmpty ? (
          /* 공란 프로젝트 플레이스홀더 */
          <div className="w-full h-full bg-gray-100 flex flex-col items-center justify-center gap-3">
            <Clock className="w-10 h-10 text-gray-300" />
            <span className="text-sm text-gray-400 font-medium">준비 중</span>
          </div>
        ) : (
          <>
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {hasVideo ? (
                  <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <Play className="w-7 h-7 text-gray-900 ml-1" fill="currentColor" />
                  </div>
                ) : (
                  <div className="bg-white/90 backdrop-blur-sm px-5 py-2.5 rounded-full">
                    <span className="text-sm font-semibold text-gray-900">자세히 보기</span>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Info */}
      <div className="mt-4 space-y-1.5">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full text-white tracking-wide uppercase bg-[#F27920]">
            {project.tag}
          </span>
          {project.contribution && (
            <span className="text-xs text-gray-400 font-medium">{project.contribution}</span>
          )}
        </div>
        <h3 className={`text-lg font-bold text-gray-900 transition-colors duration-300 ${isEmpty ? '' : 'group-hover:text-[#F27920]'}`}>
          {project.title}
        </h3>
        {project.subtitle && (
          <p className="text-sm text-gray-500 leading-relaxed">{project.subtitle}</p>
        )}
      </div>
    </motion.div>
  );
}
