import { HomeContainer, HomeContent, Logo, CI, BackgroundElement, TreeElement1, TreeElement2, TreeElement3 } from './style';
// import Particles from 'react-tsparticles';

import ErmineLogo from '../../assets/hello-ermine_logo.png';
import CIImage from '../../assets/CI.png';

import FrontScene from '../../assets/home/home_background1.png';
import Tree1 from '../../assets/home/home_tree1.png';
import Tree2 from '../../assets/home/home_tree2.png';
import Tree3 from '../../assets/home/home_tree3.png';

const Home = () => {
  return (
    <>
      <HomeContainer>
        <HomeContent>
          <Logo src={ErmineLogo} alt='Ermine Logo' />
          <p>Break your limit, practice your skills</p>
        </HomeContent>
        <CI src={CIImage} alt='CI Image' />
        <TreeElement1 src={Tree1}/>
        <TreeElement2 src={Tree2}/>
        <TreeElement3 src={Tree3}/>
        <BackgroundElement src={FrontScene}/>
      </HomeContainer>
    </>
  );
};

export default Home;
