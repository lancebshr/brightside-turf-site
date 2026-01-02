import fs from 'fs';
import path from 'path';

export interface SiteImages {
  global: {
    logo: string;
    googleIcon: string;
  };
  heroBackgrounds: {
    homepage: string;
    about: string;
    faq: string;
    blog: string;
    reviews: string;
    fertilization: string;
    coreAeration: string;
    lawnMowing: string;
    holidayLighting: string;
    cleanups: string;
    mulchInstallation: string;
  };
  homepage: {
    howItWorksImage: string;
    serviceCards: {
      fertilization: string;
      lawnMowing: string;
      mulchInstallation: string;
      coreAeration: string;
      cleanups: string;
      holidayLighting: string;
    };
  };
  aboutPage: {
    coreValuesImage: string;
  };
  getQuotePage: {
    backgroundImage: string;
  };
  serviceAreaMap: string;
  services: {
    fertilization: {
      featureGrid: {
        image1: string;
        image2: string;
        image3: string;
        image4: string;
      };
      gallery: {
        image1: string;
        image2: string;
        image3: string;
        image4: string;
        image5: string;
        image6: string;
      };
    };
    coreAeration: {
      featureGrid: {
        image1: string;
        image2: string;
        image3: string;
        image4: string;
      };
    };
    lawnMowing: {
      featureGrid: {
        image1: string;
        image2: string;
        image3: string;
        image4: string;
      };
    };
    holidayLighting: {
      featureGrid: {
        image1: string;
        image2: string;
        image3: string;
        image4: string;
      };
    };
    cleanups: {
      featureGrid: {
        image1: string;
        image2: string;
        image3: string;
        image4: string;
      };
    };
    mulchInstallation: {
      featureGrid: {
        image1: string;
        image2: string;
        image3: string;
        image4: string;
      };
    };
  };
}

const siteImagesPath = path.join(process.cwd(), 'content/settings/site-images.json');

export function getSiteImages(): SiteImages {
  try {
    const fileContents = fs.readFileSync(siteImagesPath, 'utf8');
    return JSON.parse(fileContents) as SiteImages;
  } catch {
    // Return defaults if file doesn't exist
    return {
      global: {
        logo: '/BrightsideLogo.svg',
        googleIcon: '/icons8-google-48.png',
      },
      heroBackgrounds: {
        homepage: '/testhero.jpg',
        about: '/testhero.jpg',
        faq: '/testhero.jpg',
        blog: '/testhero.jpg',
        reviews: '/testhero.jpg',
        fertilization: '/testhero.jpg',
        coreAeration: '/testhero.jpg',
        lawnMowing: '/testhero.jpg',
        holidayLighting: '/testhero.jpg',
        cleanups: '/testhero.jpg',
        mulchInstallation: '/testhero.jpg',
      },
      homepage: {
        howItWorksImage: '/newhero.png',
        serviceCards: {
          fertilization: '/fertilization.JPG',
          lawnMowing: '/grasstop.jpeg',
          mulchInstallation: '/team-truck.jpg',
          coreAeration: '/aeration.JPG',
          cleanups: '/overseeding.JPG',
          holidayLighting: '/lighting.webp',
        },
      },
      aboutPage: {
        coreValuesImage: '/team-truck.jpg',
      },
      getQuotePage: {
        backgroundImage: '/grasstop.jpeg',
      },
      serviceAreaMap: '/brightsidemaps.webp',
      services: {
        fertilization: {
          featureGrid: {
            image1: '/fertilization.JPG',
            image2: '/grasstop.jpeg',
            image3: '/team-truck.jpg',
            image4: '/aeration.JPG',
          },
          gallery: {
            image1: '/aeration.JPG',
            image2: '/fertilization.JPG',
            image3: '/overseeding.JPG',
            image4: '/lighting.webp',
            image5: '/team-truck.jpg',
            image6: '/grasstop.jpeg',
          },
        },
        coreAeration: {
          featureGrid: {
            image1: '/aeration.JPG',
            image2: '/overseeding.JPG',
            image3: '/grasstop.jpeg',
            image4: '/team-truck.jpg',
          },
        },
        lawnMowing: {
          featureGrid: {
            image1: '/grasstop.jpeg',
            image2: '/team-truck.jpg',
            image3: '/fertilization.JPG',
            image4: '/aeration.JPG',
          },
        },
        holidayLighting: {
          featureGrid: {
            image1: '/lighting.webp',
            image2: '/team-truck.jpg',
            image3: '/fertilization.JPG',
            image4: '/grasstop.jpeg',
          },
        },
        cleanups: {
          featureGrid: {
            image1: '/overseeding.JPG',
            image2: '/team-truck.jpg',
            image3: '/grasstop.jpeg',
            image4: '/fertilization.JPG',
          },
        },
        mulchInstallation: {
          featureGrid: {
            image1: '/team-truck.jpg',
            image2: '/grasstop.jpeg',
            image3: '/overseeding.JPG',
            image4: '/fertilization.JPG',
          },
        },
      },
    };
  }
}
