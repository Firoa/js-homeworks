import './styles.css';
import menuItems from './menu.json';
import menuItemsTemplate from './templates/menuItems.hbs';
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

class ThemeControler {
  constructor(themes) {
    this.themeNode = document.querySelector('body');
    this.swithNode = document.querySelector('.js-switch-input');
    this.themes = themes;
    this.ThemeSwitcher();
    this.isDefault = localStorage.getItem('theme') === 'dark-theme';
    this.ThemePreseter();
  }
  ThemePreseter() {
    if (this.isDefault) {
      this.swithNode.checked = true;
      this.themeNode.classList.add('dark-theme');
      console.log('startThemePreseter');
    } else {
      this.swithNode.checked = false;
      this.themeNode.classList.add('light-theme');
      console.log('light-theme');
    }
  }
  ThemeSwitcher() {
    this.swithNode.addEventListener('change', () => {
      if (this.swithNode.checked) {
        console.log(this.swithNode.checked);
        this.themeNode.classList.remove('light-theme');
        this.themeNode.classList.add('dark-theme');
        localStorage.setItem('theme', Theme.DARK);
      } else {
        console.log(this.swithNode.checked);
        this.themeNode.classList.remove('dark-theme');
        this.themeNode.classList.add('light-theme');
        localStorage.setItem('theme', Theme.LIGHT);
      }
    });
  }
}
const parentList = document.querySelector('.js-menu');
const ListCreator = items =>
  items.map(item => menuItemsTemplate(item)).join('');
parentList.insertAdjacentHTML('beforeend', ListCreator(menuItems));

new ThemeControler(Theme);
