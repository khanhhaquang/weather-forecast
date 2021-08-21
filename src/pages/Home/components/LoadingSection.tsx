import ContentLoader from 'react-content-loader';
import { useSelector } from 'react-redux';
import { getIsLoading } from '../reducer';

const CardLoader = () => (
  <ContentLoader viewBox="0 0 400 360" height={120} width="100%" speed={1.5}>
    <rect x="0" y="0" rx="5" ry="5" width="360" height="60" />
    <rect x="0" y="80" rx="5" ry="5" width="360" height="60" />
    <rect x="0" y="180" rx="5" ry="5" width="360" height="100" />
  </ContentLoader>
);

const LoadingSection: React.FC = () => {
  const isLoading = useSelector(getIsLoading);

  return isLoading ? (
    <>
      {[...Array(5)].map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <CardLoader key={index} />
      ))}
    </>
  ) : null;
};

export default LoadingSection;
