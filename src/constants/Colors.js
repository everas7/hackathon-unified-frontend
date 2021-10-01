const Backgrounds = {
    background_1: '#FFF',
    background_2: '#F0F2F5',
    background_3: '#D0D5DC',
    background_4: 'rgba(49,140,230, 0.8)', // #318CE6
};

const ConversationBubbles = {
    bubble_incoming: '#F0F2F5',
    bubble_outgoing: '#FFF',
    bubble_outgoing_border: '#E4E9F2',
};

const ConversationSources = {
    badge_agentz: '#318CE6',
    badge_facebook: '#4367B2',
    badge_other: '#666975',
    badge_sms: '#00BE41',
    badge_text: '#FFF',
};

const RawColors = {
    black: '#000',
    black_a_07: 'rgba(0,0,0,0.07)',
    black_a_50: 'rgba(0,0,0,0.5)',
    black_a_60: 'rgba(0,0,0,0.6)',
    black_a_70: 'rgba(0,0,0,0.7)',
    gray_10: '#F7F8FA',
    gray_20: '#F0F2F5',
    gray_30: '#E5E7EB',
    gray_40: '#E3E5EC',
    gray_50: '#E1E4E8',
    gray_60: '#E1E3E6',
    gray_70: '#D0D5DC',
    gray_80: '#B9C1D6',
    gray_90: '#999',
    gray_100: '#8A9DBA',
    gray_110: '#666975',
    gray_110_a_50: 'rgba(102,105,117,0.5)',
    yellow: '#FFDE49',
    white: '#FFF',
    white_a_10: 'rgba(255,255,255,0.1)',
};

const SignpostPalette = {
    danger: '#F64656',
    danger_text: '#FFF',
    dark: '#8E8E93',
    dark_text: '#FFF',
    primary: '#318CE6',
    primary_text: '#FFF',
    secondary: '#E3E5EC',
    secondary_text: '#666975',
    success: '#00D115',
    success_text: '#FFF',
};

const Shimmer = {
    shimmer_1: '#EEE',
    shimmer_2: '#DDD',
};

const Texts = {
    text_1: '#000',
    text_2: '#0A0F33',
    text_3: '#666975',
};

const colors =  {
    ...Backgrounds,
    ...ConversationBubbles,
    ...ConversationSources,
    ...RawColors,
    ...SignpostPalette,
    ...Shimmer,
    ...Texts,
};

export default colors;