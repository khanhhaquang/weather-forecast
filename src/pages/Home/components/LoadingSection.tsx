import ContentLoader from 'react-content-loader';
import { useSelector } from 'react-redux';
import { getIsLoading } from '../redux/reducer';

const CardLoader = (props: any) => (
  <ContentLoader {...props} viewBox="0 0 400 420" height={140} width="100%" speed={1.5}>
    <rect x="0" y="0" width="400" height="420" />
  </ContentLoader>
);

const LoadingSection: React.FC = () => {
  const isLoading = useSelector(getIsLoading);

  return isLoading ? (
    <>
      {[...Array(5)].map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <CardLoader data-testid={`card-loader-${index}`} key={index} />
      ))}
    </>
  ) : null;
};

export default LoadingSection;
