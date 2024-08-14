export const transform = (value) => {
    if (!value) {
        return value;
      }
      const modifiedString = value?.replace(/_/g, ' ');
      const words = modifiedString.split(' ');
  
      for (let i = 0; i < words?.length; i++) {
        words[i] = words[i]?.charAt(0).toUpperCase() + words[i]?.slice(1).toLowerCase();
      }
      return words?.join(' ');
  };
