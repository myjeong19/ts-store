type SelectColorProps = {
  colors: string[];
  productColor: string;
  setProductColor: React.Dispatch<React.SetStateAction<string>>;
};

export const SelectColor = ({ colors, productColor, setProductColor }: SelectColorProps) => {
  return (
    <div className="mt-6">
      <h4 className="text-md font-medium tracking-wider capitalize">Colors</h4>
      <div className="mt-2">
        {colors.map(color => (
          <button
            key={color}
            type="button"
            className={`rounded-full w-6 h-6 border-2 
                mr-2
                ${color === productColor && 'border-black dark:border-white '}`}
            onClick={() => setProductColor(color)}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  );
};
