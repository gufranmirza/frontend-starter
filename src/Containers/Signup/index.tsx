import React from 'react';
import { AppContainer } from '@/core/Components/AppContainer';
import HeroWithImage from '@/Components/Common/HeroWithImage';
import * as vars from '@/core/Theme/vars';
import Footer from '@/Components/Common/Footer';
import Right from './Right';
import Left from './Left';

import * as styles from './styles';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render(): any {
    return (
      <div>
        <styles.Root>
          <AppContainer>
            <styles.Container>
              <styles.ColumnLeft>
                <Left />
              </styles.ColumnLeft>
              <styles.Column>
                <Right />
              </styles.Column>
            </styles.Container>
          </AppContainer>
        </styles.Root>
        <HeroWithImage
          title="Share Your Company’s Story"
          description="The best candidates aren’t job seekers: they’re purpose seekers. Our content and events will share your company’s mission, vision and culture with India's tech community."
          features={[
            'Custom Editorial Content',
            'Custom Video Content',
            'Exclusive Recruitment Events',
          ]}
          image="/illustrations/company-story-graphic.png"
          margin="60px 0px 0px 0"
          padding="50px 0"
          imagePosition="right"
          background={vars.Blue1}
        />
        <HeroWithImage
          title="Reach Our Engaged Audience"
          description="From software engineers and sales pros to UX designers and data scientists, our network will connect you with India's most engaged community of qualified tech professionals."
          features={[
            '256,000+ Monthly Users',
            '107,000+ Email Subscribers',
            '20,000+ Social Media Followers',
          ]}
          image="/illustrations/engaged-audience-graphic.png"
          margin="40px 0p 0"
          padding="50px 0"
          imagePosition="left"
          background=""
        />
        <HeroWithImage
          title="Hire Informed + Enthusiastic Candidates"
          description="Our users are curious. They want to know who you are, what you do and what makes you tick. The result is a pool of informed and enthusiastic candidates who can’t wait to apply to your jobs.          "
          features={[
            '15+ Applicants Per Job (average) ',
            '10,000+ Opt-In Candidate Sourcing Database            ',
            '65% Less Than National Average Cost Per Hire            ',
          ]}
          image="/illustrations/hire-candidats-graphic.png"
          margin="10px 0px 0px 0"
          padding="50px 0"
          imagePosition="right"
          background={vars.Blue1}
        />
        <Footer />
      </div>
    );
  }
}

export default Signup;
