import Review from "@/entities/Review";
import Container from "@/components/Container/Container";
import Image from "next/image";
import styles from "./ReviewCard.module.css"

interface ReviewCardProps {
  review: Review,
}

export default function ReviewCard({ review }: ReviewCardProps) {

  return (
    <Container flexDirection="row" gap="2rem">
      <Image src="/defaultAvatar.svg" alt="avatar" width="100" height="100" />
      <div className={ styles.reviewInfo }>
        <div className={ styles.title }>
          <h3>{ review.name }</h3>
          <span>
            Оценка: <strong>{ review.rating }</strong>
          </span>
        </div>
        <p>
          {review.text}
        </p>
      </div>
    </Container>
  )
}