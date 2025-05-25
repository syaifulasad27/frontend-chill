import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from "sonner"
import usersApi from '@/services/api/admin/users'; // sesuaikan path-nya

interface UserFormProps {
  onSuccess?: () => void;
}

interface UserPayload {
  username: string;
  name: string;
  email: string;
  password: string;
  role: string;
  isActive: string;
}

const UserForm: React.FC<UserFormProps> = ({onSuccess}) => {
  const [form, setForm] = useState<UserPayload>({
    username: '',
    name: '',
    email: '',
    password: '',
    role: '',
    isActive: 'true',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      await usersApi.create(form);
      toast("Selamat!!!", {
        description: "User berhasil ditambahkan!",
      })
      setForm({
        username: '',
        name: '',
        email: '',
        password: '',
        role: '',
        isActive: 'true',
      });

      if (onSuccess) {
        onSuccess(); // panggil callback untuk refresh data
      }
    } catch (error) {
      console.error('Gagal menambah user:', error);
      alert('Gagal menambah user!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="mt-5 mb-5 bg-gray-100">
      <CardContent>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4">

          {(Object.keys(form) as (keyof UserPayload)[])
            .filter(field => field !== 'isActive')
            .map(field => (
              <div key={field} className='grid gap-2'>
                <Label htmlFor={field} className="capitalize">{field}</Label>
                <Input
                  id={field}
                  name={field}
                  type={field === 'password' ? 'password' : 'text'}
                  value={form[field]}
                  onChange={handleChange}
                  required
                />
              </div>
          ))}

          <div className='grid gap-2'>
            <Label htmlFor="isActive">Status Aktif</Label>
            <Input
              id="isActive"
              name="isActive"
              value={form.isActive}
              onChange={handleChange}
              placeholder="true atau false"
              required
            />
          </div>

          <Button type="submit" disabled={loading} className='self-end'>
            {loading ? 'Loading...' : 'Tambah'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default UserForm;
