export interface NotFoundProps {
  message?: string;
}

export function NotFound({ message }: NotFoundProps) {
  return (
    <div className="pb-2 border-b-2 border-x-gray-400">
      <h3 className="font-bold text-gray-600">404 Not Found</h3>
      {message ? <p className="text-sm text-gray-400">{message}</p> : null}
    </div>
  );
}
