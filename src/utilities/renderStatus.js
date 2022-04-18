export const renderStatusColor = status => {
  if (status === 'pending') return 'bg-[#ff8f00]';
  if (status === 'paid') return 'bg-[#74D74B]';
  if (status === 'draft') return 'bg-[#373b53]';
};
