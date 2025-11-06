import React, { useEffect, useState } from 'react'

import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.min.css'

const API = 'http://localhost:8081/api/products'

export default function ProductList () {
  const [products, setProducts] = useState([])

  const [form, setForm] = useState({
    name: '',
    category: '',
    price: '',
    description: ''
  })

  const [error, setError] = useState(null)

  const [isEditing, setIsEditing] = useState(false)

  const [editId, setEditId] = useState(null)

  useEffect(() => {
    fetchAll()
  }, [])

  const fetchAll = async () => {
    try {
      const res = await axios.get(API)

      setProducts(res.data)

      setError(null)
    } catch (err) {
      setError(
        'Failed to fetch products: ' +
          (err.response?.data?.message || err.message)
      )
    }
  }

  const create = async () => {
    if (
      !form.name ||
      !form.category ||
      !form.price ||
      isNaN(form.price) ||
      !form.description
    ) {
      setError('Please enter valid name, category, price, and description')

      return
    }

    try {
      await axios.post(API, { ...form, price: Number(form.price) })

      setForm({ name: '', category: '', price: '', description: '' })

      setError(null)

      fetchAll()
    } catch (err) {
      setError(
        'Failed to add product: ' + (err.response?.data?.message || err.message)
      )
    }
  }

  const update = async () => {
    if (
      !form.name ||
      !form.category ||
      !form.price ||
      isNaN(form.price) ||
      !form.description
    ) {
      setError('Please enter valid name, category, price, and description')

      return
    }

    try {
      await axios.put(`${API}/${editId}`, {
        ...form,
        price: Number(form.price)
      })

      setForm({ name: '', category: '', price: '', description: '' })

      setIsEditing(false)

      setEditId(null)

      setError(null)

      fetchAll()
    } catch (err) {
      setError(
        'Failed to update product: ' +
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

  const edit = product => {
    setForm({
      name: product.name,

      category: product.category,

      price: product.price.toString(),

      description: product.description
    })

    setIsEditing(true)

    setEditId(product.productId)
  }

  const cancelEdit = () => {
    setForm({ name: '', category: '', price: '', description: '' })

    setIsEditing(false)

    setEditId(null)

    setError(null)
  }

  return (
    <div>
      <h3>Products</h3>

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
            placeholder='Category'
            value={form.category}
            onChange={e => setForm({ ...form, category: e.target.value })}
          />
          <input
            className='col form-control'
            placeholder='Price'
            value={form.price}
            onChange={e => setForm({ ...form, price: e.target.value })}
          />
          <input
            className='col form-control'
            placeholder='Description'
            value={form.description}
            onChange={e => setForm({ ...form, description: e.target.value })}
          />
          <div className='mt-2'>
            {isEditing ? (
              <>
                <button className='btn btn-primary me-2' onClick={update}>
                  Update Product
                </button>
                <button className='btn btn-secondary' onClick={cancelEdit}>
                  Cancel
                </button>
              </>
            ) : (
              <button className='btn btn-success' onClick={create}>
                Add Product
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
            <th>Category</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p.productId}>
              <td>{p.productId}</td>
              <td>{p.name}</td>
              <td>{p.category}</td>
              <td>{p.price}</td>
              <td>
                <button
                  className='btn btn-sm btn-primary me-2'
                  onClick={() => edit(p)}
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
                  </svg>{' '}
                </button>
                <button
                  className='btn btn-sm btn-danger'
                  onClick={() => remove(p.productId)}
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
