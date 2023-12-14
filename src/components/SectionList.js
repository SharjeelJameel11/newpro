import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSectionsAsync, deleteSectionAsync, updateSectionAsync } from '../redux/slices/sectionSlice';

const SectionList = () => {
  const dispatch = useDispatch();
  const { data: sections, isLoading, isError } = useSelector((state) => state.sections);

  useEffect(() => {
    dispatch(getSectionsAsync());
  }, [dispatch]);

  const [selectedSection, setSelectedSection] = useState(null);

  const handleDeleteSection = (sectionId) => {
    dispatch(deleteSectionAsync(sectionId));
  };

  const handleUpdateSection = (section) => {
    setSelectedSection(section);
  };

  const handleSaveUpdate = () => {
    dispatch(updateSectionAsync(selectedSection));
    setSelectedSection(null);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading sections.</p>;
  }

  return (
    <div>
      <h2>Section List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sections.map((section) => (
            <tr key={section.id}>
              <td>{section.id}</td>
              <td>{section.name}</td>
              <td>
                <button onClick={() => handleUpdateSection(section)}>Update</button>
                <button onClick={() => handleDeleteSection(section.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Update Section Form */}
      {selectedSection && (
        <div>
          <h3>Update Section</h3>
          <input
            type="text"
            value={selectedSection.name}
            onChange={(e) => setSelectedSection({ ...selectedSection, name: e.target.value })}
          />
          <button onClick={handleSaveUpdate}>Save</button>
          <button onClick={() => setSelectedSection(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default SectionList;
