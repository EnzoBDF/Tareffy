import { FaSearch } from 'react-icons/fa';


interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
  }
  
  export default function SearchBar({ value, onChange, placeholder }: SearchBarProps) {
    return (
      <div className="gap-3 flex items-center bg-white text-black rounded-full px-3 py-1 shadow-sm">
        <FaSearch />
        <input
          type="text"
          value={value}
          placeholder={placeholder || "Pesquisar..."}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-transparent outline-none"
        />
      </div>
    );
  }
  