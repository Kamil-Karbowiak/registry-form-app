<?php

declare(strict_types=1);

namespace App\Form;

use App\Enum\JobPosition;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Email;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\Valid;

class UserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('first_name', TextType::class, [
                'constraints' => [
                    new NotBlank(),
                    new Length([
                        'max' => 50,
                    ]),
                ],
            ])
            ->add('last_name', TextType::class, [
                'constraints' => [
                    new NotBlank(),
                    new Length([
                        'max' => 100,
                    ]),
                ],
            ])
            ->add('email', EmailType::class, [
                'constraints' => [
                    new NotBlank(),
                    new Email(),
                ],
            ])
            ->add('description', TextType::class)
            ->add('job_position', ChoiceType::class, [
                'choices' => [
                    JobPosition::getValues(),
                ],
                'constraints' => [
                    new NotBlank(),
                ],
            ])
            ->addEventListener(FormEvents::PRE_SUBMIT, [$this, 'addSkills']);
    }

    public function addSkills(FormEvent $formEvent): void
    {
        $data = $formEvent->getData();
        $form = $formEvent->getForm();

        $jobPosition = $data['job_position'] ?? null;

        if (! in_array($jobPosition, JobPosition::getValues(), true)) {
            return;
        }

        $skillsType = match ($jobPosition) {
            JobPosition::Tester->value => TesterType::class,
            JobPosition::Developer->value => DeveloperType::class,
            JobPosition::ProjectManager->value => ProjectManagerType::class
        };

        $form->add('skills', $skillsType, [
            'constraints' => [new Valid()],
        ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        parent::configureOptions($resolver);
    }
}
