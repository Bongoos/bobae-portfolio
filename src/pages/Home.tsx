/*
 * Home Page — 이보배 포트폴리오 (클리오 콘텐츠 크리에이션 파트 지원)
 * 
 * 수정: 이력탭/포폴탭 좌측정렬, 행간 좁히기, *삭제, 포폴 좌측정렬
 */
import { useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  careerData,
  coverImage,
  portfolioProjects,
} from '@/lib/portfolioData';
import type { PortfolioProject } from '@/lib/portfolioData';
import PortfolioCard from '@/components/PortfolioCard';
import ProjectModal from '@/components/ProjectModal';
import toolsIconStrip from '@/assets/tools-icon-strip.png';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const [initialVideoIndex, setInitialVideoIndex] = useState<number | undefined>(undefined);

  const openProject = useCallback((project: PortfolioProject, videoIdx?: number) => {
    setInitialVideoIndex(videoIdx);
    setSelectedProject(project);
    setModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
    setInitialVideoIndex(undefined);
    setTimeout(() => {
      setSelectedProject(null);
      // URL 해시에서 project 정보 제거
      if (window.location.hash.startsWith('#project/')) {
        window.history.replaceState(null, '', window.location.pathname);
      }
    }, 300);
  }, []);

  // URL 해시 기반 딥링크: #project/{id} 또는 #project/{id}/{videoIndex}
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#project/')) {
        const parts = hash.replace('#project/', '').split('/');
        const projectId = parts[0];
        const videoIdx = parts[1] !== undefined ? parseInt(parts[1], 10) : undefined;
        const found = portfolioProjects.find((p) => p.id === projectId);
        if (found) {
          openProject(found, videoIdx);
        }
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, [openProject]);

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* ─── Section 1: Hero Cover — PDF 1p 이미지 그대로 사용 ─── */}
      <section className="relative w-full">
        <img
          src={coverImage}
          alt="Portfolio Cover"
          className="w-full h-auto block"
        />
      </section>

      {/* ─── Section 2: Profile — 좌측 정렬 레이아웃 ─── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          {/* 소개글 — 행간 좁히기 (leading-tight) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <p className="text-2xl md:text-3xl lg:text-4xl text-gray-800 leading-snug font-medium">
              주도적이고 새로운 시도를 추구하는
            </p>
            <p className="text-2xl md:text-3xl lg:text-4xl leading-snug font-medium mt-1">
              <span className="text-[#F27920] font-bold">디자이너 이보배</span>입니다.
            </p>
          </motion.div>

          {/* Career — 좌측 정렬, * 삭제 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-14"
          >
            <h3 className="text-2xl font-bold text-[#F27920] mb-6">Career</h3>
            <div className="space-y-5">
              {careerData.map((item, idx) => (
                <div key={idx}>
                  <p className="text-base font-bold text-gray-900 leading-snug">{item.company}</p>
                  <p className="text-sm text-gray-500 mt-0.5">{item.period}</p>
                  <p className="text-sm text-gray-500 mt-0.5">{item.role}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tools — 좌측 정렬, 통합 이미지 사용 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-[#F27920] mb-6">Tools</h3>
            <img
              src={toolsIconStrip}
              alt="Tools"
              className="h-14 w-auto object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* ─── Section 3: Portfolio — 좌측 정렬 ─── */}
      <section id="portfolio" className="py-24 md:py-32 bg-[#FAFAF8]">
        <div className="max-w-5xl mx-auto px-6">
          {/* Section header — 좌측 정렬 */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#F27920] text-sm tracking-[0.2em] uppercase font-semibold mb-3"></p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Portfolio</h2>
            <p className="text-gray-500 mt-3 max-w-xl">
              콘텐츠 기획부터 디자인, 영상 편집까지 다양한 프로젝트의 기획과 실행 과정을 담았습니다.
            </p>
          </motion.div>

          {/* Portfolio Grid — 좌측 정렬 유지 */}
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-14">
            {portfolioProjects.map((project, idx) => (
              <PortfolioCard
                key={project.id}
                project={project}
                onClick={() => openProject(project)}
                delay={idx % 2 === 0 ? 0 : 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Project Modal ─── */}
      <ProjectModal
        project={selectedProject}
        isOpen={modalOpen}
        onClose={closeModal}
        initialVideoIndex={initialVideoIndex}
      />
    </div>
  );
}
