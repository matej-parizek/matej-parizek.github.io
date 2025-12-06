import useDarkMode from '@/utils/useDarkMode';
import Icon from '@/components/AppIcon'; // uprav cestu podle projektu

export default function ThemeToggle() {
  const { isDark, toggle } = useDarkMode();

  return (
    <button
      onClick={toggle}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border
                 text-text-secondary hover:text-text-primary hover:bg-muted transition-professional
                 focus:outline-none focus:ring-2 focus:ring-primary/40"
      aria-label={isDark ? 'Přepnout na světlý režim' : 'Přepnout na tmavý režim'}
      title={isDark ? 'Light mode' : 'Dark mode'}
      type="button"
    >
      <Icon name={isDark ? 'Sun' : 'Moon'} size={16} />
      <span className="sr-only">{isDark ? 'Dark' : 'Light'}</span>
    </button>
  );
}
