export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchArticles() {
    const options = {
      headers: {
        Authorization: '6cd46aaefadd445c84dea5ef48a1fca0',
      },
    };
    const url = `https://newsapi.org/v2/everything?q=${this.searchQuery}&language=en&pageSize=7&page=${this.page}`;

    return fetch(url, options)
      .then(r => r.json())
      .then(data => {
        console.log(data);
        this.incrementPage();
        return data.articles;
      });
  }
  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.query;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}