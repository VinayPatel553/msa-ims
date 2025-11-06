import React, { useEffect, useState } from 'react'

import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.min.css'

const API = 'http://localhost:8081/api/suppliers'

export default function SupplierList () {
  const [suppliers, setSuppliers] = useState([])

  const [form, setForm] = useState({ name: '', contactInfo: '' })

  const [error, setError] = useState(null)

  const [isEditing, setIsEditing] = useState(false)

  const [editId, setEditId] = useState(null)

  useEffect(() => {
    fetchAll()
  }, [])

  const fetchAll = async () => {
    try {
      const res = await axios.get(API)

      setSuppliers(res.data)

      setError(null)
    } catch (err) {
      setError(
        'Failed to fetch suppliers: ' +
          (err.response?.data?.message || err.message)
      )
    }
  }

  const create = async () => {
    if (!form.name || !form.contactInfo) {
      setError('Please enter a valid name and contact info')

      return
    }

    try {
      await axios.post(API, form)

      setForm({ name: '', contactInfo: '' })

      setError(null)

      fetchAll()
    } catch (err) {
      setError(
        'Failed to add supplier: ' +
          (err.response?.data?.message || err.message)
      )
    }
  }

  const update = async () => {
    if (!form.name || !form.contactInfo) {
      setError('Please enter a valid name and contact info')

      return
    }

    try {
      await axios.put(`${API}/${editId}`, form)

      setForm({ name: '', contactInfo: '' })

      setIsEditing(false)

      setEditId(null)

      setError(null)

      fetchAll()
    } catch (err) {
      setError(
        'Failed to update supplier: ' +
          (err.response?.data?.message || err.message)
      )
    }
  }

  const remove = async id => {
    try {
      await axios.delete(`${API}/${id}`)

      setError(null)

      fetchAll()
    } catch (err) {
      setError('Delete failed: ' + (err.response?.data?.message || err.message))
    }
  }

  const edit = supplier => {
    setForm({
      name: supplier.name,

      contactInfo: supplier.contactInfo
    })

    setIsEditing(true)

    setEditId(supplier.supplierId)
  }

  const cancelEdit = () => {
    setForm({ name: '', contactInfo: '' })

    setIsEditing(false)

    setEditId(null)

    setError(null)
  }

  return (
    <div>
      <h3>Suppliers</h3>

      {error && <div className='alert alert-danger'>{error}</div>}
      <div className='card p-3 mb-3'>
        <div className='row g-2'>
          <input
            className='col form-control'
            placeholder='Name'
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
          />
          <input
            className='col form-control'
            placeholder='Contact Info'
            value={form.contactInfo}
            onChange={e => setForm({ ...form, contactInfo: e.target.value })}
          />
          <div className='mt-2'>
            {isEditing ? (
              <>
                <button className='btn btn-primary me-2' onClick={update}>
                  Update Supplier
                </button>
                <button className='btn btn-secondary' onClick={cancelEdit}>
                  Cancel
                </button>
              </>
            ) : (
              <button className='btn btn-success' onClick={create}>
                Add Supplier
              </button>
            )}
          </div>
        </div>
      </div>

      <table className='table table-striped'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Contact Info</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map(s => (
            <tr key={s.supplierId}>
              <td>{s.supplierId}</td>
              <td>{s.name}</td>
              <td>{s.contactInfo}</td>
              <td>
                <button
                  className='btn btn-sm btn-primary me-2'
                  onClick={() => edit(s)}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    class='bi bi-pencil-square'
                    viewBox='0 0 16 16'
                  >
                    <path d='M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z' />
                    <path
                      fill-rule='evenodd'
                      d='M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z'
                    />
                  </svg>
                </button>
                <button
                  className='btn btn-sm btn-danger'
                  onClick={() => remove(s.supplierId)}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    class='bi bi-trash'
                    viewBox='0 0 16 16'
                  >
                    <path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z' />
                    <path d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z' />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
