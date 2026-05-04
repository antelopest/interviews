interface User {
  id: string;
  name: string;
  email: string;
  age?: number; // optional field
}

interface Admin extends User {
  role: string;
  permissions: string[];
}


function sum(a: number, b: number): number {
  return a + b;
}

interface APIResponse<T> {
  status: number;
  data: T;
  error?: string;
}