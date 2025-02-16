import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import { NextSeo } from 'next-seo';
import { FormattedMessage } from 'react-intl';
import { PageHeader } from '../../src/components/PageHeader';
import Image from "next/image";

interface Asset {
  name: string;
  description: string;
  offers: {
    price: string;
    idrPrice: string;
    expiration: string;
    from: string;
  }[];
  priceHistory: string[];
  itemActivity: {
    event: string;
    price: string;
    idrPrice: string;
    from: string;
    to: string;
    toHash: string;
  }[];
}

const AssetDetailPage = () => {
  const asset: Asset = {
    name: "Example Asset",
    description: "This is a sample asset description.",
    offers: [
      { price: "0.5 ETH", idrPrice: "Rp 12,000,000", expiration: "2 days", from: "User123" }
    ],
    priceHistory: ["0.4 ETH", "0.45 ETH", "0.5 ETH"],
    itemActivity: [
      { event: "Sale", price: "0.5 ETH", idrPrice: "Rp 12,000,000", from: "User123", to: "User456", toHash: "0xabc123" }
    ]
  };

  return (
    <>
      <NextSeo title='Asset Detail' description='Detail of the asset' />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <PageHeader
              breadcrumbs={[
                { caption: <FormattedMessage id="home" defaultMessage="Home" />, uri: '/' },
                { caption: <FormattedMessage id="create.order" defaultMessage="Buy an NFT" />, uri: '/order/create', active: true }
              ]}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <AssetLeftSection asset={asset} />
          </Grid>
          <Grid item xs={12} sm={8}>
            <AssetRightSection asset={asset} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

const AssetLeftSection: React.FC<{ asset: Asset }> = ({ asset }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <Image src="/assets/images/landbox.png" alt="Landbox" width={500} height={300} className="rounded-lg" />
      <h2 className="text-xl font-semibold mt-2">{asset?.name}</h2>
      <p className="text-gray-600">{asset?.description}</p>
    </div>
  );
};

const AssetRightSection: React.FC<{ asset: Asset }> = ({ asset }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">Offers</h3>
      <table className="w-full border border-gray-300 rounded-md">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Price</th>
            <th className="p-2 border">IDR Price</th>
            <th className="p-2 border">Expiration</th>
            <th className="p-2 border">From</th>
          </tr>
        </thead>
        <tbody>
          {asset?.offers?.map((offer, index) => (
            <tr key={index} className="text-center border-b">
              <td className="p-2">{offer.price}</td>
              <td className="p-2">{offer.idrPrice}</td>
              <td className="p-2">{offer.expiration}</td>
              <td className="p-2">{offer.from}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 className="text-lg font-semibold mt-4">Price History</h3>
      <ul className="list-disc pl-5">
        {asset?.priceHistory?.map((price, index) => (
          <li key={index} className="text-gray-700">{price}</li>
        ))}
      </ul>

      <h3 className="text-lg font-semibold mt-4">Item Activity</h3>
      <table className="w-full border border-gray-300 rounded-md mt-2">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Event</th>
            <th className="p-2 border">Price</th>
            <th className="p-2 border">IDR Price</th>
            <th className="p-2 border">From</th>
            <th className="p-2 border">To</th>
            <th className="p-2 border">To hash</th>
          </tr>
        </thead>
        <tbody>
          {asset?.itemActivity?.map((activity, index) => (
            <tr key={index} className="text-center border-b">
              <td className="p-2">{activity.event}</td>
              <td className="p-2">{activity.price}</td>
              <td className="p-2">{activity.idrPrice}</td>
              <td className="p-2">{activity.from}</td>
              <td className="p-2">{activity.to}</td>
              <td className="p-2 truncate max-w-xs">{activity.toHash}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssetDetailPage;
