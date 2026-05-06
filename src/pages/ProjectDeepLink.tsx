/*
 * ProjectDeepLink — /project/:id/:videoIdx? 경로로 접근 시
 * Home 페이지를 배경으로 보여주면서 해당 프로젝트 모달을 바로 열어주는 페이지
 */
import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'wouter';
import { portfolioProjects } from '@/lib/portfolioData';
import type { PortfolioProject } from '@/lib/portfolioData';
import ProjectModal from '@/components/ProjectModal';
import Home from './Home';

export default function ProjectDeepLink() {
  const params = useParams<{ id: string; videoIdx?: string }>();
  const [, navigate] = useLocation();
  const [project, setProject] = useState<PortfolioProject | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [videoIndex, setVideoIndex] = useState<number | undefined>(undefined);

  useEffect(() => {
    const found = portfolioProjects.find((p) => p.id === params.id);
    if (found) {
      setProject(found);
      setVideoIndex(params.videoIdx !== undefined ? parseInt(params.videoIdx, 10) : undefined);
      setModalOpen(true);
    } else {
      navigate('/', { replace: true });
    }
  }, [params.id, params.videoIdx, navigate]);

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => {
      navigate('/', { replace: true });
    }, 300);
  };

  return (
    <>
      <Home />
      <ProjectModal
        project={project}
        isOpen={modalOpen}
        onClose={closeModal}
        initialVideoIndex={videoIndex}
      />
    </>
  );
}
