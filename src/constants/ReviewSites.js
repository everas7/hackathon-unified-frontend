const ReviewSiteType = {
    ANGIESLIST: 'Angie\'s List',
    AVVO: 'Avvo',
    BBB: 'BBB',
    BESTCOMPANY: 'Best Company',
    CARECOM: 'Carecom',
    CARINGCOM: 'Caringcom',
    CITYSEARCH: 'Citysearch',
    CLUTCH: 'Clutch',
    CONSUMERAFFAIRS: 'ConsumerAffairs',
    CONSUMERSADVOCATEORG: 'ConsumersAdvocateorg',
    CPADIRECTORY: 'CPA Directory',
    FACEBOOK: 'Facebook',
    GIGMASTERS: 'GigMasters',
    GLASSDOOR: 'GlassDoor',
    GOLFADVISOR: 'Golf Advisor',
    GOOGLE: 'Google+',
    GREATNONPROFITS: 'GreatNonprofits',
    GREATSCHOOLS: 'GreatSchools',
    HEALTHGRADES: 'Healthgrades',
    HOMEADVISOR: 'HomeAdvisor',
    HOUZZ: 'Houzz',
    INDEED: 'Indeed',
    KUDZU: 'Kudzu',
    LAWYERSCOM: 'Lawyerscom',
    LEAFLY: 'Leafly',
    MERCHANTCIRCLE: 'MerchantCircle',
    NEXTDOOR: 'NextDoor',
    PTIN: 'PTIN',
    REALSELF: 'RealSelf',
    REALTORCOM: 'Realtorcom',
    RESELLERRATINGS: 'ResellerRatings',
    SPAFINDER: 'SpaFinder',
    THEKNOT: 'The Knot',
    THUMBTACK: 'Thumbtack',
    TRIPADVISOR: 'TripAdvisor',
    TRUSTEDCHOICE: 'Trusted Choice',
    TRUSTPILOT: 'TrustPilot',
    UPCITY: 'UpCity',
    WEDDINGWIRE: 'WeddingWire',
    WEEDMAPS: 'Weedmaps',
    WEVETS: 'WeVets',
    YELLOWPAGES: 'Yellow Pages',
    YELP: 'Yelp',
    YOGATRAIL: 'YogaTrail',
    ZILLOW: 'Zillow',
    ZOCDOC: 'Zocdoc',
};

export const ReviewSites = {
    [ReviewSiteType.ANGIESLIST]: {
        id: 3,
        code: 'angieslist',
        name: ReviewSiteType.ANGIESLIST,
        displayName: 'Angie\'s List',
        domain: 'angieslist.com',
        logoImageUid: 'reviews/angies-list.png',
        logoImageHeightPx: 54,
        logoImageWidthPx: 60,
        isMajorReviewSite: false,
        removed: false,
    },
    [ReviewSiteType.AVVO]: {
        id: 20,
        code: 'avvo',
        name: ReviewSiteType.AVVO,
        displayName: 'Avvo',
        domain: 'avvo.com',
        logoImageUid: 'reviews/avvo.png',
        logoImageHeightPx: 60,
        logoImageWidthPx: 60,
        isMajorReviewSite: false,
        removed: false,
    },
    [ReviewSiteType.BBB]: {
        id: 14,
        code: 'bbb',
        name: ReviewSiteType.BBB,
        displayName: 'BBB',
        domain: 'bbb.org',
        logoImageUid: 'reviews/bbb.png',
        logoImageHeightPx: 60,
        logoImageWidthPx: 60,
        isMajorReviewSite: false,
        removed: false,
    },
    [ReviewSiteType.BESTCOMPANY]: {
        id: 42,
        code: 'bestcompany',
        name: ReviewSiteType.BESTCOMPANY,
        displayName: 'Best Company',
        domain: 'bestcompany.com',
        logoImageUid: 'reviews/best-company.png',
        logoImageHeightPx: 60,
        logoImageWidthPx: 60,
        isMajorReviewSite: false,
        removed: false,
    },
    [ReviewSiteType.CARECOM]: {
        id: 30,
        code: 'carecom',
        name: ReviewSiteType.CARECOM,
        displayName: 'Care.com',
        domain: 'care.com',
        logoImageUid: 'reviews/care-com.png',
        logoImageHeightPx: 60,
        logoImageWidthPx: 60,
        isMajorReviewSite: false,
        removed: false,
    },
    [ReviewSiteType.CARINGCOM]: {
        id: 38,
        code: 'caringcom',
        name: ReviewSiteType.CARINGCOM,
        displayName: 'Caring.com',
        domain: 'caring.com',
        logoImageUid: 'reviews/caring-com.png',
        logoImageHeightPx: 60,
        logoImageWidthPx: 60,
        isMajorReviewSite: false,
        removed: false,
    },
    [ReviewSiteType.CITYSEARCH]: {
        id: 29,
        code: 'citysearch',
        name: ReviewSiteType.CITYSEARCH,
        displayName: 'Citysearch',
        domain: 'citysearch.com',
        logoImageUid: 'reviews/citysearch.png',
        logoImageHeightPx: 60,
        logoImageWidthPx: 60,
        isMajorReviewSite: false,
        removed: false,
    },
    [ReviewSiteType.CLUTCH]: {
        id: 40,
        code: 'clutch',
        name: ReviewSiteType.CLUTCH,
        displayName: 'Clutch',
        domain: 'clutch.co',
        logoImageUid: 'reviews/clutch.png',
        logoImageHeightPx: 60,
        logoImageWidthPx: 60,
        isMajorReviewSite: false,
        removed: false,
    },
    [ReviewSiteType.CONSUMERAFFAIRS]: {
        id: 35,
        code: 'consumeraffairs',
        name: ReviewSiteType.CONSUMERAFFAIRS,
        displayName: 'ConsumerAffairs',
        domain: 'consumeraffairs.com',
        logoImageUid: 'reviews/consumer-affairs.png',
        logoImageHeightPx: 60,
        logoImageWidthPx: 60,
        isMajorReviewSite: false,
        removed: false,
    },
    [ReviewSiteType.CONSUMERSADVOCATEORG]: {
        id: 43,
        code: 'consumersadvocateorg',
        name: ReviewSiteType.CONSUMERSADVOCATEORG,
        displayName: 'ConsumersAdvocate.org',
        domain: 'consumersadvocate.org',
        logoImageUid: 'reviews/consumers-advocate-org.png',
        logoImageHeightPx: 60,
        logoImageWidthPx: 60,
        isMajorReviewSite: false,
        removed: false,
    },
    [ReviewSiteType.CPADIRECTORY]: {
        id: 15,
        code: 'cpadirectory',
        name: ReviewSiteType.CPADIRECTORY,
        displayName: 'CPA Directory',
        domain: 'cpadirectory.com',
        logoImageUid: 'reviews/national-directory-cpa.png',
        logoImageHeightPx: 60,
        logoImageWidthPx: 60,
        isMajorReviewSite: false,
        removed: false,
    },
    [ReviewSiteType.FACEBOOK]: {
        id: 4,
        code: 'facebook',
        name: ReviewSiteType.FACEBOOK,
        displayName: 'Facebook',
        domain: 'facebook.com',
        logoImageUid: 'reviews/facebook.png',
        logoImageHeightPx: 60,
        logoImageWidthPx: 60,
        isMajorReviewSite: true,
        removed: false,
    },
    [ReviewSiteType.GIGMASTERS]: {
        id: 23,
        code: 'gigmasters',
        name: ReviewSiteType.GIGMASTERS,
        displayName: 'GigMasters',
        domain: 'gigmasters.com',
        logoImageUid: 'reviews/gigmasters.png',
        logoImageHeightPx: 60,
        logoImageWidthPx: 60,
        isMajorReviewSite: false,
        removed: false,
    },
    [ReviewSiteType.GLASSDOOR]: {
        id: 25,
        code: 'glassdoor',
        name: ReviewSiteType.GLASSDOOR,
        displayName: 'GlassDoor',
        domain: 'glassdoor.com',
        logoImageUid: 'reviews/glassdoor.png',
        logoImageHeightPx: 60,
        logoImageWidthPx: 60,
        isMajorReviewSite: false,
        removed: false,
    },
    [ReviewSiteType.GOLFADVISOR]: {
        id: 31,
        code: 'golfadvisor',
        name: ReviewSiteType.GOLFADVISOR,
        displayName: 'Golf Advisor',
        domain: 'golfadvisor.com',
        logoImageUid: 'reviews/golf-advisor.png',
        logoImageHeightPx: 60,
        logoImageWidthPx: 60,
        isMajorReviewSite: false,
        removed: false,
    },
    [ReviewSiteType.GOOGLE]: {
        id: 2,
        code: 'google',
        name: ReviewSiteType.GOOGLE,
        displayName: 'Google',
        domain: 'google.com',
        logoImageUid: 'reviews/google.png',
        logoImageHeightPx: 60,
        logoImageWidthPx: 60,
        isMajorReviewSite: true,
        removed: false,
    },
    [ReviewSiteType.GREATNONPROFITS]: {
        id: 26,
        code: 'greatnonprofits',
        name: ReviewSiteType.GREATNONPROFITS,
        displayName: 'GreatNonprofits',
        domain: 'greatnonprofits.org',
        logoImageUid: 'reviews/greatnonprofits.png',
        logoImageHeightPx: 60,
        logoImageWidthPx: 60,
        isMajorReviewSite: false,
        removed: false,
    },
    [ReviewSiteType.GREATSCHOOLS]: {
        id: 37,
        code: 'greatschools',
        name: ReviewSiteType.GREATSCHOOLS,
        displayName: 'GreatSchools',
        domain: 'greatschools.org',
        logoImageUid: 'reviews/greatschools.png',
        logoImageHeightPx: 60,
        logoImageWidthPx: 60,
        isMajorReviewSite: false,
        removed: false,
    },
    [ReviewSiteType.HEALTHGRADES]: {
        id: 5,
        code: 'healthgrades',
        name: ReviewSiteType.HEALTHGRADES,
        displayName: 'Healthgrades',
        domain: 'healthgrades.com',
        logoImageUid: 'reviews/health-grades.png',
        logoImageHeightPx: 60,
        logoImageWidthPx: 60,
        isMajorReviewSite: false,
        removed: false,
    },
    [ReviewSiteType.HOMEADVISOR]: {
        id: 6,
        code: 'homeadvisor',
        name: ReviewSiteType.HOMEADVISOR,
        displayName: 'HomeAdvisor',
        domain: 'homeadvisor.com',
        logoImageUid: 'reviews/home-advisor.png',
        logoImageHeightPx: 60,
        logoImageWidthPx: 60,
        isMajorReviewSite: false,
        removed: false,
    },
    [ReviewSiteType.HOUZZ]: {
        id: 16,
        code: 'houzz',
        name: ReviewSiteType.HOUZZ,
        displayName: 'Houzz',
        domain: 'houzz.com',
        logoImageUid: 'reviews/houzz.png',
        logoImageHeightPx: 60,
        logoImageWidthPx: 60,
        isMajorReviewSite: false,
        removed: false,
    },
    [ReviewSiteType.INDEED]: {
        id: 24,
        code: 'indeed',
        name: ReviewSiteType.INDEED,
        displayName: 'Indeed',
        domain: 'indeed.com',
        logoImageUid: 'reviews/indeed.png',
        logoImageHeightPx: 60,
        logoImageWidthPx: 60,
        isMajorReviewSite: false,
        removed: false,
    },
    [ReviewSiteType.KUDZU]: {
        id: 32,
        code: 'kudzu',
        name: ReviewSiteType.KUDZU,
        displayName: 'Kudzu',
        domain: 'kudzu.com',
        logoImageUid: 'reviews/kudzu.png',
        logoImageHeightPx: 60,
        logoImageWidthPx: 60,
        isMajorReviewSite: false,
        removed: true,
    },
    [ReviewSiteType.LAWYERSCOM]: {
        id: 33,
        code: 'lawyerscom',
        name: ReviewSiteType.LAWYERSCOM,
        displayName: 'Lawyers.com',
        domain: 'lawyers.com',
        logoImageUid: 'reviews/lawyers-com.png',
        logoImageHeightPx: 60,
        logoImageWidthPx: 60,
        isMajorReviewSite: false,
        removed: false,
    },
    [ReviewSiteType.LEAFLY]: {
        id: 44,
        code: 'leafly',
        name: ReviewSiteType.LEAFLY,
        displayName: 'Leafly',
        domain: 'leafly.com',
        logoImageUid: 'reviews/leafly.png',
        logoImageHeightPx: 60,
        logoImageWidthPx: 60,
        isMajorReviewSite: false,
        removed: false,
    },
    [ReviewSiteType.MERCHANTCIRCLE]: {
        id: 17,
        code: 'merchantcircle',
        name: ReviewSiteType.MERCHANTCIRCLE,
        displayName: 'MerchantCircle',
        domain: 'merchantcircle.com',
        logoImageUid: 'reviews/merchant-circle.png',
        logoImageHeightPx: 60,
        logoImageWidthPx: 60,
        isMajorReviewSite: false,
        removed: false,
    },
    [ReviewSiteType.NEXTDOOR]: {
        id: 45,
        code: 'nextdoor',
        name: ReviewSiteType.NEXTDOOR,
        displayName: 'NextDoor',
        domain: 'nextdoor.com',
        logoImageUid: 'reviews/nextdoor.png',
        logoImageHeightPx: 60,
        logoImageWidthPx: 60,
        isMajorReviewSite: false,
        removed: false,
    },
    [ReviewSiteType.PTIN]: {
        id: 21,
        code: 'ptin',
        name: ReviewSiteType.PTIN,
        displayName: 'PTIN',
        domain: 'ptin.org,ptindirectory.com',
        logoImageUid: 'reviews/ptin.png',
        logoImageHeightPx: 60,
        logoImageWidthPx: 60,
        isMajorReviewSite: false,
        removed: false,
    },
    [ReviewSiteType.REALSELF]: {
        id: 34,
        code: 'realself',
        name: ReviewSiteType.REALSELF,
        displayName: 'RealSelf',
        domain: 'realself.com',
        logoImageUid: 'reviews/real-self.png',
        logoImageHeightPx: 60,
        logoImageWidthPx: 60,
        isMajorReviewSite: false,
        removed: false,
    },
    [ReviewSiteType.REALTORCOM]: {
        id: 27,
        code: 'realtorcom',
        name: ReviewSiteType.REALTORCOM,
        displayName: 'Realtor.com',
        domain: 'realtor.com',
        logoImageUid: 'reviews/realtor.png',
        logoImageHeightPx: 60,
        logoImageWidthPx: 60,
        isMajorReviewSite: false,
        removed: false,
    },
    [ReviewSiteType.RESELLERRATINGS]: {
        id: 18,
        code: 'resellerratings',
        name: ReviewSiteType.RESELLERRATINGS,
        displayName: 'ResellerRatings',
        domain: 'resellerratings.com',
        logoImageUid: 'reviews/reseller-rating.png',
        logoImageHeightPx: 60,
        logoImageWidthPx: 60,
        isMajorReviewSite: false,
        removed: false,
    },
    [ReviewSiteType.SPAFINDER]: {
        id: 22,
        code: 'spafinder',
        name: ReviewSiteType.SPAFINDER,
        displayName: 'SpaFinder',
        domain: 'spafinder.com',
        logoImageUid: 'reviews/spa-finder.png',
        logoImageHeightPx: 60,
        logoImageWidthPx: 60,
        isMajorReviewSite: false,
        removed: false,
    },
    [ReviewSiteType.THEKNOT]: {
        id: 7,
        code: 'theknot',
        name: ReviewSiteType.THEKNOT,
        displayName: 'The Knot',
        domain: 'theknot.com',
        logoImageUid: 'reviews/the-knot.png',
        logoImageHeightPx: 60,
        logoImageWidthPx: 60,
        isMajorReviewSite: false,
        removed: false,
    },
    [ReviewSiteType.THUMBTACK]: {
        id: 8,
        code: 'thumbtack',
        name: ReviewSiteType.THUMBTACK,
        displayName: 'Thumbtack',
        domain: 'thumbtack.com',
        logoImageUid: 'reviews/thumbtack.png',
        logoImageHeightPx: 60,
        logoImageWidthPx: 60,
        isMajorReviewSite: false,
        removed: false,
    },
    [ReviewSiteType.TRIPADVISOR]: {
        id: 9,
        code: 'tripadvisor',
        name: ReviewSiteType.TRIPADVISOR,
        displayName: 'TripAdvisor',
        domain: 'tripadvisor.com',
        logoImageUid: 'reviews/trip-advisor.png',
        logoImageHeightPx: 60,
        logoImageWidthPx: 60,
        isMajorReviewSite: false,
        removed: false,
    },
    [ReviewSiteType.TRUSTEDCHOICE]: {
        id: 41,
        code: 'trustedchoice',
        name: ReviewSiteType.TRUSTEDCHOICE,
        displayName: 'Trusted Choice',
        domain: 'trustedchoice.com',
        logoImageUid: 'reviews/trusted-choice.png',
        logoImageHeightPx: 60,
        logoImageWidthPx: 60,
        isMajorReviewSite: false,
        removed: false,
    },
    [ReviewSiteType.TRUSTPILOT]: {
        id: 19,
        code: 'trustpilot',
        name: ReviewSiteType.TRUSTPILOT,
        displayName: 'TrustPilot',
        domain: 'trustpilot.com',
        logoImageUid: 'reviews/trust-pilot.png',
        logoImageHeightPx: 60,
        logoImageWidthPx: 60,
        isMajorReviewSite: false,
        removed: false,
    },
    [ReviewSiteType.UPCITY]: {
        id: 39,
        code: 'upcity',
        name: ReviewSiteType.UPCITY,
        displayName: 'UpCity',
        domain: 'upcity.com',
        logoImageUid: 'reviews/upcity.png',
        logoImageHeightPx: 60,
        logoImageWidthPx: 60,
        isMajorReviewSite: false,
        removed: false,
    },
    [ReviewSiteType.WEDDINGWIRE]: {
        id: 10,
        code: 'weddingwire',
        name: ReviewSiteType.WEDDINGWIRE,
        displayName: 'WeddingWire',
        domain: 'weddingwire.com',
        logoImageUid: 'reviews/wedding-wire.png',
        logoImageHeightPx: 60,
        logoImageWidthPx: 60,
        isMajorReviewSite: false,
        removed: false,
    },
    [ReviewSiteType.WEEDMAPS]: {
        id: 46,
        code: 'weedmaps',
        name: ReviewSiteType.WEEDMAPS,
        displayName: 'Weedmaps',
        domain: 'weedmaps.com',
        logoImageUid: 'reviews/weedmaps.png',
        logoImageHeightPx: 60,
        logoImageWidthPx: 60,
        isMajorReviewSite: false,
        removed: false,
    },
    [ReviewSiteType.WEVETS]: {
        id: 28,
        code: 'wevets',
        name: ReviewSiteType.WEVETS,
        displayName: 'WeVets',
        domain: 'wevets.us',
        logoImageUid: 'reviews/wevets.png',
        logoImageHeightPx: 60,
        logoImageWidthPx: 60,
        isMajorReviewSite: false,
        removed: true,
    },
    [ReviewSiteType.YELLOWPAGES]: {
        id: 11,
        code: 'yellowpages',
        name: ReviewSiteType.YELLOWPAGES,
        displayName: 'Yellow Pages',
        domain: 'yellowpages.com',
        logoImageUid: 'reviews/yellow-pages.png',
        logoImageHeightPx: 60,
        logoImageWidthPx: 60,
        isMajorReviewSite: false,
        removed: false,
    },
    [ReviewSiteType.YELP]: {
        id: 1,
        code: 'yelp',
        name: ReviewSiteType.YELP,
        displayName: 'Yelp',
        domain: 'yelp.com',
        logoImageUid: 'reviews/yelp.png',
        logoImageHeightPx: 60,
        logoImageWidthPx: 60,
        isMajorReviewSite: true,
        removed: false,
    },
    [ReviewSiteType.YOGATRAIL]: {
        id: 36,
        code: 'yogatrail',
        name: ReviewSiteType.YOGATRAIL,
        displayName: 'YogaTrail',
        domain: 'yogatrail.com',
        logoImageUid: 'reviews/yoga-trail.png',
        logoImageHeightPx: 60,
        logoImageWidthPx: 60,
        isMajorReviewSite: false,
        removed: false,
    },
    [ReviewSiteType.ZILLOW]: {
        id: 12,
        code: 'zillow',
        name: ReviewSiteType.ZILLOW,
        displayName: 'Zillow',
        domain: 'zillow.com',
        logoImageUid: 'reviews/zillow.png',
        logoImageHeightPx: 60,
        logoImageWidthPx: 60,
        isMajorReviewSite: false,
        removed: false,
    },
    [ReviewSiteType.ZOCDOC]: {
        id: 13,
        code: 'zocdoc',
        name: ReviewSiteType.ZOCDOC,
        displayName: 'Zocdoc',
        domain: 'zocdoc.com',
        logoImageUid: 'reviews/zocdoc.png',
        logoImageHeightPx: 60,
        logoImageWidthPx: 60,
        isMajorReviewSite: false,
        removed: false,
    },
};

export const ReviewSiteInfo = Object.values(ReviewSites).reduce(
    (acc, v) => (acc[v.id] = v) && acc,
    {}
);

export const ScorableReviewSites = [
    ReviewSites[ReviewSiteType.GOOGLE].id,
    ReviewSites[ReviewSiteType.FACEBOOK].id,
    ReviewSites[ReviewSiteType.YELP].id,
];