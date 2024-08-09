const Form = ({ formData, setFormData }) => {

  // const [formData, setFormData] = useState({ name: '', age: '' });
  
  // Form logic...
  
    return (
      <form>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="number"
          value={formData.age}
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
        />
      </form>
    );
  };

export default Form;