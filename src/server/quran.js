import api from './axos.api'

export default {
  showPageNumber() {
    return api().get(`surah`)
  },
}

// router.get('/surah', caching, SurahHandler.getAllSurah);
// router.get('/surah/:surah', caching, SurahHandler.getSurah);
// router.get('/surah/:surah/:ayah', caching, SurahHandler.getAyahFromSurah);
// router.get('/juz/:juz', caching, JuzHandler.getJuz);