import React from 'react';
import styled from 'styled-components';
import VideoCard from '../Atoms/VideoCard';

const SectionContainer = styled.div`
  margin-top: 20px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const VideosContainer = styled.div`
  display: flex;
  overflow-x: auto;
`;

const VideoSection = ({ title, videos, onVideoSelect }) => {
  return (
    <SectionContainer>
      <Title>{title}</Title>
      <VideosContainer>
        {videos.map((video) => (
          <VideoCard key={video.id.videoId} video={video} onVideoSelect={onVideoSelect} />
        ))}
      </VideosContainer>
    </SectionContainer>
  );
};

export default VideoSection;
