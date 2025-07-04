import React, { useState, useRef, useEffect } from 'react';
import toast from 'react-hot-toast';

const BatchTable = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    shift: 'day',
    thickness: '',
    operator: '',
    mixtureOperator: ''
  });

  // State for table data with localStorage
  const [tableData, setTableData] = useState(() => {
    const saved = localStorage.getItem('batchTableData');
    return saved ? JSON.parse(saved) : [
      { id: 1, itemName: 'Calc Carbon', timing: 'start', f1: '', f2: '', f3: '', f4: '', f5: '' },
      { id: 2, itemName: 'PVC Powder', timing: 'start', f1: '', f2: '', f3: '', f4: '', f5: '' }
    ];
  });

  // State for columns and navigation
  const [totalColumns, setTotalColumns] = useState(5);
  const [currentColumnIndex, setCurrentColumnIndex] = useState(0);
  
  // Refs for add row inputs
  const addRowRefs = useRef({});

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('batchTableData', JSON.stringify(tableData));
  }, [tableData]);

  // Handle form input changes
  const handleFormChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // Handle table cell changes
  const handleCellChange = (e, rowId, column) => {
    const updatedData = tableData.map(row => 
      row.id === rowId ? { ...row, [column]: e.target.value } : row
    );
    setTableData(updatedData);
  };

  // Add new row
  const addNewRow = () => {
    const itemName = addRowRefs.current.itemName?.value.trim();
    const timing = addRowRefs.current.timing?.value.trim();

    if (!itemName || !timing) {
      toast.error('Please enter item name and timing');
      return;
    }

    const newId = tableData.length > 0 ? Math.max(...tableData.map(r => r.id)) + 1 : 1;
    const newRow = { 
      id: newId, 
      itemName, 
      timing 
    };
    
    // Initialize all columns with values from add row inputs
    for (let i = 1; i <= totalColumns; i++) {
      const colKey = `f${i}`;
      newRow[colKey] = addRowRefs.current[colKey]?.value || '';
    }

    setTableData([...tableData, newRow]);
    
    // Clear all add row inputs
    Object.values(addRowRefs.current).forEach(ref => {
      if (ref) ref.value = '';
    });
    
    toast.success('Row added successfully');
  };

  // Navigation controls
  const nextColumn = () => {
    if (currentColumnIndex < totalColumns - 1) {
      setCurrentColumnIndex(currentColumnIndex + 1);
    } else {
      // Create new column
      setTotalColumns(prev => prev + 1);
      setCurrentColumnIndex(totalColumns);
      
      // Add new column to existing rows
      const updatedData = tableData.map(row => ({
        ...row,
        [`f${totalColumns + 1}`]: ''
      }));
      setTableData(updatedData);
      
      toast.success(`New column F${totalColumns + 1} created`);
    }
  };

  const prevColumn = () => {
    if (currentColumnIndex > 0) {
      setCurrentColumnIndex(currentColumnIndex - 1);
    }
  };

  // Get current visible column
  const currentColumn = `f${currentColumnIndex + 1}`;
  const currentBatchNumber = currentColumnIndex + 1;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Batch Production Table</h1>
        
        {/* Form Controls */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
          <div>
            <label className="block text-sm font-medium mb-1">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleFormChange}
              className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Shift</label>
            <select
              name="shift"
              value={formData.shift}
              onChange={handleFormChange}
              className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
            >
              <option value="day">Day</option>
              <option value="night">Night</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Thickness</label>
            <input
              type="text"
              name="thickness"
              value={formData.thickness}
              onChange={handleFormChange}
              className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter thickness"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Operator</label>
            <input
              type="text"
              name="operator"
              value={formData.operator}
              onChange={handleFormChange}
              className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter operator"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Mixture Operator</label>
            <input
              type="text"
              name="mixtureOperator"
              value={formData.mixtureOperator}
              onChange={handleFormChange}
              className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter mix operator"
            />
          </div>
        </div>
      </div>

      {/* Table Container */}
      <div className="p-6 pb-24">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-3 text-center">SN</th>
                <th className="border p-3 text-center">Batch/Item Name</th>
                <th className="border p-3 text-center">{currentBatchNumber}</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={row.id} className="hover:bg-gray-50">
                  <td className="border p-3 text-center">{index + 1}</td>
                  <td className="border p-3">
                    <div className="font-medium">{row.itemName}</div>
                    <div className="text-sm text-gray-600">{row.timing}</div>
                  </td>
                  <td className="border p-1">
                    <input
                      type="text"
                      value={row[currentColumn] || ''}
                      onChange={(e) => handleCellChange(e, row.id, currentColumn)}
                      className="w-full p-2 border-0 focus:ring-1 focus:ring-blue-300 rounded"
                      placeholder="Enter value"
                    />
                  </td>
                </tr>
              ))}
              
              {/* Add new row */}
              <tr className="bg-blue-50">
                <td className="border p-3 text-center">{tableData.length + 1}</td>
                <td className="border p-2">
                  <input
                    type="text"
                    ref={el => addRowRefs.current.itemName = el}
                    placeholder="Item name"
                    className="w-full p-2 mb-2 border rounded focus:ring-1 focus:ring-blue-300"
                  />
                  <input
                    type="text"
                    ref={el => addRowRefs.current.timing = el}
                    placeholder="Timing"
                    className="w-full p-2 border rounded focus:ring-1 focus:ring-blue-300"
                  />
                </td>
                <td className="border p-2">
                  <input
                    type="text"
                    ref={el => addRowRefs.current[currentColumn] = el}
                    placeholder="Enter value"
                    className="w-full p-2 border rounded focus:ring-1 focus:ring-blue-300"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Add Row Button */}
        <div className="text-center mt-4">
          <button
            onClick={addNewRow}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium"
          >
            Add Row
          </button>
        </div>
      </div>

      {/* Fixed Navigation Controls */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 shadow-lg">
        <div className="flex justify-between items-center max-w-4xl mx-auto">
          <button
            onClick={prevColumn}
            disabled={currentColumnIndex === 0}
            className={`px-6 py-2 rounded-lg font-medium ${
              currentColumnIndex === 0
                ? 'bg-gray-300 cursor-not-allowed text-gray-500'
                : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
          >
            ← Prev
          </button>
          
          <div className="text-center">
            <div className="font-medium">Column: {currentBatchNumber}</div>
            <div className="text-sm text-gray-600">Total Columns: {totalColumns}</div>
          </div>
          
          <button
            onClick={nextColumn}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium"
          >
            {currentColumnIndex === totalColumns - 1 ? 'Create New →' : 'Next →'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BatchTable;