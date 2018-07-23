const lang = {
    cleanUp: {
        '݂': '̥',
        '݁': '̊',
        'ܱ': 'ܰ',
        'ܴ': 'ܳ',
        'ܷ': 'ܶ',
        'ܻ': 'ܺ',
        'ܾ': 'ܽ',
    },
    byCombo: {
        ' ܐ̱ܢܳܐ': '-نُا',
        ' ܐ̱ܢܐ': '-نُا',
        ܗ̄ܝ̈: '',
        ܗ̄ܝ: '',
        ܐܰ: 'آ',
        ܐܳ: 'أُ',
        ܐܶ: 'إِ',
        ܐܺ: 'إٍ',
        ܐܽ: 'أٌ',
        ܒ̥: 'ڤ',
        ܒ̥ܰ: 'ڤَ',
        ܒ̥ܳ: 'ڤُ',
        ܒ̥ܶ: 'ڤِ',
        ܒ̥ܺ: 'ڤٍ',
        ܒ̥ܽ: 'ڤٌ',
        ܒ̊: 'ب',
        ܒ̊ܰ: 'بَ',
        ܒ̊ܳ: 'بُ',
        ܒ̊ܶ: 'بِ',
        ܒ̊ܺ: 'بٍ',
        ܒ̊ܽ: 'بٌ',
        ܒ̥ܰ: 'ڤَ',
        ܒ̥ܳ: 'ڤُ',
        ܒ̥ܶ: 'ڤِ',
        ܒ̥ܺ: 'ڤٍ',
        ܒ̥ܽ: 'ڤٌ',
        ܒܰ̊: 'بَ',
        ܒܳ̊: 'بُ',
        ܒܶ̊: 'بِ',
        ܒܺ̊: 'بٍ',
        ܒܽ̊: 'بٌ',
        ܓ̥: 'غ',
        ܓ̥ܰ: 'غَ',
        ܓ̥ܳ: 'غُ',
        ܓ̥ܶ: 'غِ',
        ܓ̥ܺ: 'غٍ',
        ܓ̥ܽ: 'غٌ',
        ܓ̊: 'ج',
        ܓ̊ܰ: 'جَ',
        ܓ̊ܳ: 'جُ',
        ܓ̊ܶ: 'جِ',
        ܓ̊ܺ: 'جٍ',
        ܓ̊ܽ: 'جٌ',
        ܕ̥: 'ذ',
        ܕ̥ܰ: 'ذَ',
        ܕ̥ܳ: 'ذُ',
        ܕ̥ܶ: 'ذِ',
        ܕ̥ܺ: 'ذٍ',
        ܕ̥ܽ: 'ذٌ',
        ܕ̊: 'د',
        ܕ̊ܰ: 'دَ',
        ܕ̊ܳ: 'دُ',
        ܕ̊ܶ: 'دِ',
        ܕ̊ܺ: 'دٍ',
        ܕ̊ܽ: 'دٌ',
        ܗܰ: 'هَ',
        ܗܳ: 'هُ',
        ܗܶ: 'هِ',
        ܗܺ: 'هٍ',
        ܗܽ: 'هٌ',
        ܘܰ: 'وَ',
        ܘܳ: 'وُ',
        ܘܶ: 'وِ',
        ܘܺ: 'وٍ',
        ܘܽ: 'وٌ',
        ܙܰ: 'زَ',
        ܙܳ: 'زً',
        ܙܶ: 'زِ',
        ܙܺ: 'زٍ',
        ܙܽ: 'زٌ',
        ܚܰ: 'حَ',
        ܚܳ: 'حُ',
        ܚܶ: 'حِ',
        ܚܺ: 'حٍ',
        ܚܽ: 'حٌ',
        ܛܰ: 'طَ',
        ܛܳ: 'طُ',
        ܛܶ: 'طِ',
        ܛܺ: 'طٍ',
        ܛܽ: 'طٌ',
        ܝܰ: 'يَ',
        ܝܳ: 'يُ',
        ܝܶ: 'يِ',
        ܝܺ: 'يٍ',
        ܝܽ: 'يٌ',
        ܟ̊: 'ك',
        ܟ̊ܰ: 'كَ',
        ܟ̊ܳ: 'كُ',
        ܟ̊ܶ: 'كِ',
        ܟ̊ܺ: 'كٍ',
        ܟ̊ܽ: 'كٌ',
        ܟ̥: 'خ',
        ܟ̥ܰ: 'خَ',
        ܟ̥ܳ: 'خُ',
        ܟ̥ܶ: 'خِ',
        ܟ̥ܺ: 'خٍ',
        ܟ̥̥ܽ: 'خٌ',
        ܠܰ: 'لَ',
        ܠܳ: 'لُ',
        ܠܶ: 'لِ',
        ܠܺ: 'لٍ',
        ܠܽ: 'لٌ',
        ܡܰ: 'مَ',
        ܡܳ: 'مُ',
        ܡܶ: 'مِ',
        ܡܺ: 'مٍ',
        ܡܽ: 'مٌ',
        ܢܰ: 'نَ',
        ܢܳ: 'نُ',
        ܢܶ: 'نِ',
        ܢܺ: 'نٍ',
        ܢܽ: 'نٌ',
        ܣܰ: 'سَ',
        ܣܳ: 'سُ',
        ܣܶ: 'سِ',
        ܣܺ: 'سٍ',
        ܣܽ: 'سٌ',
        ܥܰ: 'عَ',
        ܥܳ: 'عُ',
        ܥܶ: 'عِ',
        ܥܺ: 'عٍ',
        ܥܽ: 'عٌ',
        ܦ̊: 'فّ',
        ܦ̊ܰ: 'فَّ',
        ܦ̊ܳ: 'فُّ',
        ܦ̊ܶ: 'فِّ',
        ܦ̊ܺ: 'فٍّ',
        ܦ̊ܽ: 'فٌّ',
        ܦ̥: 'ف',
        ܦ̥ܰ: 'فَ',
        ܦ̥ܳ: 'فُ',
        ܦ̥ܶ: 'فِ',
        ܦ̥ܺ: 'فٍ',
        ܦ̥ܽ: 'فٌ',
        ܨܰ: 'صَ',
        ܨܳ: 'صُ',
        ܨܶ: 'صِ',
        ܨܺ: 'صٍ',
        ܨܽ: 'صٌ',
        ܩܰ: 'قَ',
        ܩܳ: 'قُ',
        ܩܶ: 'قِ',
        ܩܺ: 'قٍ',
        ܩܽ: 'قٌ',
        ܪܰ: 'رَ',
        ܪܳ: 'رُ',
        ܪܶ: 'رِ',
        ܪܺ: 'رٍ',
        ܪܽ: 'رٌ',
        ܖ̈: 'ر',
        ܖ̈ܰ: 'رَ',
        ܖ̈ܳ: 'رُ',
        ܖ̈ܶ: 'رِ',
        ܖ̈ܺ: 'رٍ',
        ܖ̈ܽ: 'رٌ',
        ܫܰ: 'شَ',
        ܫܳ: 'شُ',
        ܫܶ: 'شِ',
        ܫܺ: 'شٍ',
        ܫܽ: 'شٌ',
        ܬ̊: 'ت',
        ܬ̊ܳ: 'تُ',
        ܬ̊ܰ: 'تَ',
        ܬ̊ܶ: 'تِ',
        ܬ̊ܺ: 'تٍ',
        ܬ̥: 'ث',
        ܬ̥ܰ: 'ثَ',
        ܬ̥ܳ: 'ثُ',
        ܬ̥ܶ: 'ثِ',
        ܬ̥ܺ: 'ثٍ',
        ܬ̥ܽ: 'ثٌ',
        ܗ̱: '',
        ܗ̄: '',
        ܢ̱: '',
        ܐ̱: '',
        ܝ̱: '',
    },
    byChar: {
        ܐ: 'ا',
        ܒ: 'ب',
        ܓ: 'ج',
        ܓ̥: 'غ',
        ܕ: 'د',
        ܗ: 'ه',
        ܘ: 'و',
        ܙ: 'ز',
        ܚ: 'ح',
        ܛ: 'ط',
        ܝ: 'ي',
        ܟ: 'ك',
        ܠ: 'ل',
        ܡ: 'م',
        ܢ: 'ن',
        ܣ: 'س',
        ܥ: 'ع',
        ܦ: 'ف',
        ܨ: 'ص',
        ܩ: 'ق',
        ܪ: 'ر',
        ܫ: 'ش',
        ܬ: 'ت',
        'ܰ': 'َ',
        'ܳ': 'ُ',
        'ܶ': 'ِ',
        'ܽ': 'ٌ',
        'ܺ': 'ٍ',
    },
};
export default lang;
//# sourceMappingURL=syrToAra.js.map