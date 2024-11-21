import '../../styles/PersonalInfo.css';

export default function PersonalInfo() {
  return (
    <div className='personal-info'>
      <h2>Personal Information</h2>
      <form>
        <label>
          First Name:
          <input type="text" />
        </label>
        <label>
          Last Name:
          <input type="text" />
        </label>
        <label>
          Location:
          <input type="text" />
        </label>
        <label>
          Email:
          <input type="text" />
        </label>
        <label>
          Github:
          <input type="text" />
        </label>
      </form>
    </div>
  );
}