export const ContactsList = ({ onAddContact, contacts }) => {
  return (
    <>
      <ul>
        {contacts.map(contact => {
          return <li key={contact.id}>{contact.name}</li>;
        })}
      </ul>
    </>
  );
};
