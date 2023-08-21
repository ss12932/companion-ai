interface CompanionIdPageProps {
  params: {
    companionId: string;
  };
}

const CompanionIdPage = async ({ params }: CompanionIdPageProps) => {
  // TODO: check subscription status
  return <div>Hello Companion Id</div>;
};

export default CompanionIdPage;
