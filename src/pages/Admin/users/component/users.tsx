import React, { useEffect, useState } from 'react';
import usersApi, { User } from '@/services/api/admin/users';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import UserForm from './form-user';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState<boolean>(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Partial<User>>({});

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await usersApi.getAll();
      setUsers(response.data);
    } catch (err: unknown) {
      setError('Gagal memuat data users');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const formAdd = () => {
    setForm(!form);
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Yakin ingin menghapus user ini?')) return;

    try {
      await usersApi.remove(id);
      fetchUsers(); // refresh data
    } catch (err) {
      console.error('Gagal menghapus user:', err);
      alert('Gagal menghapus user');
    }
  };

  const startEdit = (user: User) => {
    setEditingId(user.id);
    setEditForm({ ...user });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditForm({});
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async () => {
    if (!editingId) return;

    try {
      await usersApi.update(editingId, editForm);
      setEditingId(null);
      fetchUsers(); // reload data
    } catch (err) {
      console.error('Gagal update user:', err);
      alert('Gagal update user');
    }
  };

  return (
    <div className="px-4 lg:px-14 py-10 gap-8">
      <div className='flex justify-between items-center mb-3'>
        <h2 className="text-white text-2xl font-semibold">Daftar User</h2>
        <div>
          <Button onClick={formAdd} className="bg-[#0F1E93] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full" aria-label="Simpan">{form?"Close Form":"Tambah User"}</Button>
        </div>
      </div>
      {/* Flex dibalik di mobile (form bawah, card atas), normal di desktop (form kiri, card kanan) */}
        {form && (<UserForm onSuccess={fetchUsers}/>)}
        <Table>            
          <TableCaption>{users.length==0?'Belum ada data user':''}</TableCaption>
            <TableHeader className="bg-gray-400">
                <TableRow>
                <TableHead className="w-[100px]">Nama</TableHead>
                <TableHead>Username</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Aktif?</TableHead>
                <TableHead>Avatar</TableHead>
                <TableHead className="text-right">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {users.map((user) => (
                <TableRow key={user.id}>
                    {editingId === user.id ? (
                      <>
                        <TableCell><Input name="name" value={editForm.name || ''} onChange={handleEditChange} className="input" /></TableCell>
                        <TableCell><Input name="username" value={editForm.username || ''} onChange={handleEditChange} className="input" /></TableCell>
                        <TableCell><Input name="email" value={editForm.email || ''} onChange={handleEditChange} className="input" /></TableCell>
                        <TableCell><Input name="isActive" value={editForm.isActive || ''} onChange={handleEditChange} className="input" /></TableCell>
                        <TableCell><img src={user.avatar} alt={user.name} width={40} height={40} style={{ borderRadius: '50%' }} /></TableCell>
                        <TableCell className="flex gap-2 justify-end">
                          <Button onClick={handleUpdate} className="bg-green-600 text-white">Simpan</Button>
                          <Button onClick={cancelEdit} className="bg-gray-600 text-white">Batal</Button>
                        </TableCell>
                      </>
                    ) : (
                      <>
                        <TableCell className="font-medium">{user.name}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.isActive}</TableCell>
                        <TableCell><img src={user.avatar} alt={user.name} width={40} height={40} style={{ borderRadius: '50%' }} /></TableCell>
                        <TableCell className="flex gap-2 justify-end">
                          <Button onClick={() => startEdit(user)} className="bg-[#0F1E93] text-white">Edit</Button>
                          <Button onClick={() => handleDelete(user.id)} className="bg-red-600 text-white">Delete</Button>
                        </TableCell>
                      </>
                    )}
                </TableRow>
                ))}
            </TableBody>
        </Table>
    </div>
  );
};
  
export default Users;
  