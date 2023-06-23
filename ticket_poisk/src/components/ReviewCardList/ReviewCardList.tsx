import Review from "@/entities/Review";
import ReviewCard from "@/components/ReviewCard/ReviewCard";

interface ReviewCardListProps {
  reviews: Review[];
}

export default function ReviewCardList({ reviews }: ReviewCardListProps) {
  const reviewCardList = reviews.map((review) => {
    return <ReviewCard key={review.id} review={review} />;
  });

  return <>{reviewCardList}</>;
}
